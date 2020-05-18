import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { countBy } from 'lodash';
import { Validator, ValidatorResult, ValidationError } from 'jsonschema';
import { Screen } from '@palmyra-devkit/core-api/shared';

import { Section } from '../../../models/screens-library';
import { UiComponent } from '../../../models/widgets-library';
import {
  WidgetsLibrairiesState,
  getAllWidgets
} from '../../ngrx/widgets-librairies';
import {
  ScreensLibrairiesState,
  getAllScreens
} from '../../ngrx/screens-librairies';

@Injectable()
// TODO: refactor to ValidationService validate page/screen
export class ScreenValidationService {
  constructor(
    private widgetsLibrairiesManagement: Store<WidgetsLibrairiesState>,
    private screensLibrairiesManagement: Store<ScreensLibrairiesState>
  ) {}

  validateScreensNames(
    screensNames: { displayed: string; name: string }[]
  ): {
    [key: string]: { error: string };
  } {
    if (screensNames && screensNames.length > 0) {
      return screensNames.reduce((result, itm) => {
        const empty = itm.displayed.length === 0;
        if (empty) {
          result[itm.name] = { error: 'The screen name is mandatory' };
          return result;
        }
        const occurence = screensNames.filter(
          name => name.displayed === itm.displayed
        ).length;
        const pattern =
          itm.displayed.match(/[^0-9a-zA-Z_-\s]/g);
        if (occurence > 1) {
          result[itm.name] = { error: 'This name already exists' };
        }
        if (pattern) {
          result[itm.name] = {
            error: 'Avoid using special characters'
          };
        }

        return result;
      }, {});
    }
  }
  validateScreenName(screenName: string): boolean {
    return (
      screenName.match(/[^0-9a-zA-Z_-\s]/g) !== null
    );
  }
  // TODO: refactor to validateScreenSchema
  validateSchema(screen: Screen): Observable<ValidationInfo[]> {
    const components$ = this.widgetsLibrairiesManagement.select(getAllWidgets);

    const screenTemplates$ = this.screensLibrairiesManagement.select(
      getAllScreens
    );

    return zip(components$, screenTemplates$).pipe(
      map(([components, screenTemplates]) => {
        const sections = screenTemplates.find(
          screenTemplate => screenTemplate.template === screen.content.template
        ).sections;
        return this._validateScreenSectionsRecursive(
          sections,
          screen.content,
          components
        );
      })
    );
  }

  private _validateScreenSectionsRecursive(
    sections: Section[],
    screen: Screen,
    components: UiComponent[]
  ): ValidationInfo[] {
    return sections.reduce((result, section) => {
      if (section.sections) {
        return result.concat(
          this._validateScreenSectionsRecursive(
            section.sections,
            screen[section.name],
            components
          )
        );
      }
      const screenSectionToValidate = screen[section.name];
      if (Array.isArray(screenSectionToValidate)) {
        const fieldsOccurences = this.getFielsOccurences(
          screenSectionToValidate
        );
        return result.concat(
          this._validateItemsRecursive(
            screenSectionToValidate,
            fieldsOccurences,
            components,
            section.path || section.name,
            section.name
          )
        );
      }
      return result;
    }, new Array<ValidationInfo>());
  }

  private _validateItemsRecursive(
    items: any[],
    fieldsOccurences,
    components: UiComponent[],
    sectionPath: string,
    section?: string
  ): ValidationInfo[] {
    return items.reduce((result, item, index) => {
      let deepPath = sectionPath;
      const sep = sectionPath.indexOf('-') > 0 ? '.' : '-';
      const componentMetaData = components.find(
        component => component.name === item.type
      );
      if (componentMetaData) {
        const jsonSchemaValidator: Validator = new Validator();
        const validatorResult: ValidatorResult = jsonSchemaValidator.validate(
          item.properties || item,
          componentMetaData.schema
        );
        // check fieldrequired and namerequired
        if (
          (componentMetaData.fieldRequired || componentMetaData.nameRequired) &&
          (!item.name || item.name === '')
        ) {
          const property = componentMetaData.fieldRequired ? 'Field' : 'Name';
          validatorResult.errors.push(
            new ValidationError('', '', undefined, '', 'required', property)
          );
        }
        // check occurrence
        if (item.name && fieldsOccurences[item.name] !== 1) {
          validatorResult.errors.push(
            new ValidationError('', '', undefined, '', 'unique', '')
          );
        }
        if (validatorResult.errors && validatorResult.errors.length > 0) {
          const validationInfo: ValidationInfo = {
            message: this._getErrorMessage(validatorResult),
            path: `${deepPath}${sep}${index.toString()}`
          };

          result.push(validationInfo);
        }
        // handle containers items
        if (item.components) {
          if (!deepPath) {
            deepPath = index.toString();
          } else {
            deepPath = `${deepPath}${sep}${index}`;
          }
          return result.concat(
            this._validateItemsRecursive(
              item.components,
              fieldsOccurences,
              components,
              deepPath,
              section
            )
          );
        }
      }
      return result;
    }, []);
  }
  private getFielsOccurences(items: any[]) {
    const allComponents = this.getAllComponents(items);
    return countBy(allComponents, 'name');
  }

  private getAllComponents(items: any[]) {
    const allComponents = [];
    items.forEach(component => {
      if (component.components) {
        allComponents.push(...this.getAllComponents(component.components));
      }
      allComponents.push(component);
    });
    return allComponents;
  }

  private _getErrorMessage(validatorResult: ValidatorResult): string {
    const requiredPropertiesErrors = validatorResult.errors.filter(
      error => error.name === 'required'
    );
    let requiredMessage = '';
    if (requiredPropertiesErrors.length > 0) {
      requiredMessage = requiredPropertiesErrors.reduce(
        (requiredMsg, error) => {
          return `${requiredMsg} <li> ${error.argument} </li>`;
        },
        ''
      );
      const title = '<span>The properties below are required :</span>';
      requiredMessage = requiredMessage
        ? title + `<ul>${requiredMessage}</ul>`
        : '';
    }

    const invalidTypeErrors = validatorResult.errors.filter(
      error => error.name === 'type'
    );
    let invalidTypeMessage = '';
    if (invalidTypeErrors.length > 0) {
      invalidTypeMessage = invalidTypeErrors.reduce((invalidMsg, error) => {
        return `${invalidMsg} <li> ${error.property.replace('instance.', '')} ${
          error.message
        }`;
      }, '');
      const title = '<span>The properties below have invalid type :</span>';
      invalidTypeMessage = invalidTypeMessage
        ? title + `<ul>${invalidTypeMessage}</ul>`
        : '';
    }

    const invalidEnumValuesErrors = validatorResult.errors.filter(
      error => error.name === 'enum'
    );
    let invalidEnumValuesMessage = '';
    if (invalidEnumValuesErrors.length > 0) {
      invalidEnumValuesMessage = invalidEnumValuesErrors.reduce(
        (invalidValueEnum, error) => {
          return `${invalidValueEnum} <li> ${error.property.replace(
            'instance.',
            ''
          )} ${error.message}`;
        },
        ''
      );
      const title =
        '<span>The properties below have invalid value selected :</span>';
      invalidEnumValuesMessage = invalidEnumValuesMessage
        ? title + `<ul>${invalidEnumValuesMessage}</ul>`
        : '';
    }
    const invalidItemName = validatorResult.errors.filter(
      error => error.name === 'unique'
    );
    const invalidItemNameMessage =
      invalidItemName.length > 0 ? '<span>Duplicated name</span><br/>' : '';
    return `${invalidItemNameMessage}${requiredMessage}${invalidTypeMessage}${invalidEnumValuesMessage}`;
  }
}

export interface ValidationInfo {
  message: string;
  path?: string;
}
