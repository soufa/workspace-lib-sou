/* tslint:disable */
import { Feature, Entity, Role } from '@palmyra-devkit/core-api/shared';

export const COMPONENT_LIBRARY = {
  id: 0,
  name: 'PrimeNG Lib',
  version: '1.0.1',
  categories: [
    {
      name: 'input',
      components: [
        {
          name: 'Label',
          category: 'Input',
          icon: '',
          scope: [
            'view.components',
            'edit.components',
            'selector.filter.components',
            'selector.grid.components'
          ],
          rules: [
            {
              includedScreens: ['edit'],
              excludedUseCases: [],
              includedTypes: ['numeric', 'boolean'],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            },
            {
              includedScreens: ['selector'],
              excludedUseCases: [],
              includedTypes: ['numeric', 'boolean', 'date'],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: false,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              label: {
                type: 'string',
                description: 'The label key of the displayed label menu item'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              wordSize: {
                type: 'integer',
                minimum: 0,
                description: ''
              },
              mandatory: {
                type: 'boolean',
                description: 'To indicate whether the field is mandatory or no'
              }
            },
            required: ['label']
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'wordSize'
                },
                {
                  key: 'styleName'
                }
              ]
            }
          ]
        },
        {
          name: 'TextField',
          category: 'Input',
          scope: ['edit.components'],
          icon:
            'M16 32h416c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96H261.743v128H296c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H152c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm427.315 340.682l-80.001-79.995C353.991 283.365 336 288.362 336 304v48H112v-47.99c0-14.307-17.307-21.319-27.314-11.313L4.685 372.692c-6.245 6.245-6.247 16.379 0 22.626l80.001 79.995C94.009 484.635 112 479.638 112 464v-48h224v47.99c0 14.307 17.307 21.319 27.314 11.313l80.001-79.995c6.245-6.245 6.248-16.379 0-22.626z',
          rules: [
            {
              includedScreens: ['searchInput', 'edit'],
              includedTypes: ['numeric', 'string', 'relation']
            },
            {
              includedScreens: ['searchInput'],
              includedTypes: ['double']
            },
            {
              includedScreens: ['edit', 'view'],
              includedTypes: ['numeric', 'string', 'date']
            },
            {
              excludedUseCases: ['searchInput'],
              includedTypes: ['long']
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              role: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              maxLength: {
                type: 'integer',
                minimum: 0
              },
              prefix: {
                type: 'string'
              },
              suffix: {
                type: 'string'
              },
              mask: {
                type: 'string'
              },
              max: {
                type: 'integer',
                minimum: 0
              },
              label: {
                type: 'string',
                description: 'The label key of the displayed Text menu item'
              },
              screen: {
                type: 'string',
                enum: [''],
                description: 'To indicate whether the field is mandatory or not'
              },
              feature: {
                type: 'string',
                enum: ['Hello'],
                description:
                  'To specify whether to set the field label visible or not.'
              },
              hideOperator: {
                type: 'boolean',
                description: 'To indicate that the operator can be hidden'
              },
              keys: {
                type: 'array',
                description: 'key of the field',
                items: {
                  type: 'object',
                  properties: {
                    key: {
                      type: 'string'
                    }
                  },
                  required: ['key']
                }
              },
              caseSensitive: {
                type: 'string',
                enum: ['uppercase', 'lowercase', 'default']
              },
              defaultOperator: {
                type: 'string',
                description:
                  'To default operator when the option hideOperator is enabled '
              }
            },
            required: ['label', 'keys']
          },
          layout: [
            {
              items: [
                {
                  key: 'label',
                  value: '$screensByFeature',
                  deps: 'field'
                },
                {
                  key: 'feature',
                  value: '$Features'
                },
                {
                  key: 'screen',
                  value: '$Screens',
                  deps: 'feature'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'role',
                  value: '$Roles',
                  deps: 'feature'
                },
                {
                  key: 'hideOperator',
                  rules: [
                    {
                      includedScreens: ['searchInput'],
                      excludedUseCases: [],
                      includedTypes: [],
                      excludedTypes: [],
                      includedRelation: [],
                      excludedRelation: []
                    }
                  ]
                },
                {
                  key: 'defaultOperator',
                  rules: [
                    {
                      includedScreens: ['searchInput'],
                      excludedUseCases: [],
                      includedTypes: [],
                      excludedTypes: [],
                      includedRelation: [],
                      excludedRelation: []
                    }
                  ]
                },
                {
                  key: 'caseSensitive'
                },
                {
                  key: 'maxLength'
                },
                {
                  key: 'max'
                },
                {
                  key: 'prefix'
                },
                {
                  key: 'suffix'
                },
                {
                  key: 'mask'
                },
                {
                  key: 'keys',
                  type: 'array',
                  rules: [
                    {
                      includedScreens: [],
                      excludedUseCases: [],
                      includedTypes: ['relation'],
                      excludedTypes: [],
                      includedRelation: ['composition'],
                      excludedRelation: []
                    }
                  ],
                  items: [
                    {
                      key: 'keys[].key',
                      notitle: true,
                      placeholder: 'key'
                    }
                  ]
                },
                {
                  key: 'styleName'
                }
              ]
            }
          ]
        },
        {
          name: 'Password',
          category: 'Input',
          scope: ['edit.components'],
          icon:
            'M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z',
          rules: [
            {
              includedScreens: ['searchInput', 'edit'],
              excludedUseCases: [],
              includedTypes: [],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              label: {
                type: 'string',
                description:
                  'The label key of the displayed ComboBox menu item '
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              mandatory: {
                type: 'boolean',
                description:
                  '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
              },
              showLabel: {
                type: 'boolean',
                description:
                  'To specify whether to set the field label visible or not.'
              }
            },
            required: ['label']
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'showLabel'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'styleName'
                }
              ]
            }
          ]
        },
        {
          name: 'DateField',
          category: 'Input',
          scope: ['edit.components'],
          icon:
            'M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z',
          rules: [
            {
              includedScreens: [],
              excludedUseCases: [],
              includedTypes: ['string', 'date'],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              format: {
                type: 'string',
                description:
                  'Applicable in case of TextFieldCalendarLayout and FromToLayout'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              label: {
                type: 'string',
                description:
                  'The label key of the displayed ComboBox menu item '
              },
              mandatory: {
                type: 'boolean',
                description:
                  '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form'
              },
              showLabel: {
                type: 'boolean',
                description:
                  'To specify whether to set the field label visible or not.'
              },
              datePrecision: {
                type: 'string'
              }
            },
            required: ['label', 'format']
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'showLabel'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'datePrecision'
                },
                {
                  key: 'style'
                },
                {
                  key: 'format'
                }
              ]
            }
          ]
        },
        {
          name: 'Combobox',
          category: 'Input',
          scope: ['edit.components'],
          icon:
            'M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z',
          rules: [
            {
              includedScreens: ['searchInput', 'edit'],
              excludedUseCases: [],
              includedTypes: ['numeric', 'string', 'relation', 'boolean'],
              excludedTypes: [],
              includedRelation: ['composition one', 'aggregation one'],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              displayFilter: {
                type: 'boolean',
                description:
                  '*true- displays an input field to filter the items on keyup.*false - displays an input field to filter the items on keyup. (The filter mode is always Contains mode.)'
              },
              lazy: {
                type: 'boolean',
                description:
                  'true - retrieved values only when the user click on the Combox. (onFocus Event).* false -  retrieved values when initializing the screen (ngOnInit)'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              label: {
                type: 'string',
                description:
                  'The label key of the displayed ComboBox menu item '
              },
              sortType: {
                type: 'string',
                enum: ['Asc', 'Desc', 'None']
              },
              mandatory: {
                type: 'boolean',
                description:
                  '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
              },
              showLabel: {
                type: 'boolean',
                description:
                  'To specify whether to set the field label visible or not.'
              },
              keys: {
                type: 'array',
                description: 'key of the field',
                items: {
                  type: 'object',
                  properties: {
                    key: {
                      type: 'string'
                    }
                  },
                  required: ['key']
                }
              }
            },
            required: [
              'label',
              'readOnlyCondition',
              'autoWidth',
              'displayFilter'
            ]
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'showLabel'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'sortType'
                },
                {
                  key: 'styleName'
                },
                {
                  key: 'lazy'
                },
                {
                  key: 'displayFilter'
                },
                {
                  key: 'keys',
                  type: 'array',
                  items: [
                    {
                      key: 'keys[].key',
                      notitle: true,
                      placeholder: 'key'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Checkbox',
          category: 'Input',
          scope: ['edit.components'],

          icon:
            'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z',
          rules: [
            {
              includedScreens: ['edit', 'searchInput'],
              excludedUseCases: [],
              includedTypes: ['boolean'],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              label: {
                type: 'string',
                description:
                  'The label key of the displayed ComboBox menu item '
              },
              mandatory: {
                type: 'boolean',
                description:
                  '* true - specifies that the combobox must be filled out before submitting the form. *false -  specifies that the combobox must not be filled out before submitting the form '
              },
              showLabel: {
                type: 'boolean',
                description:
                  'To specify whether to set the field label visible or not.'
              },
              readOnlyCondition: {
                type: 'string',
                description:
                  'If the condition is verified, it specifies that the component should be disabled'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              }
            },
            required: ['readOnly', 'mandatory']
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'showLabel'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'styleName'
                }
              ]
            }
          ]
        },
        {
          name: 'Radio',
          category: 'Input',
          scope: ['edit.components'],
          icon:
            'M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z',
          rules: [
            {
              includedScreens: ['searchInput', 'edit'],
              excludedUseCases: [],
              includedTypes: ['boolean'],
              excludedTypes: [],
              includedRelation: [],
              excludedRelation: []
            }
          ],
          container: false,
          fieldRequired: true,
          schema: {
            type: 'object',
            properties: {
              styleName: {
                type: 'string',
                description: 'can be used to customize the style'
              },
              readOnly: {
                type: 'boolean',
                description: 'Specify if the field is read only or not'
              },
              label: {
                type: 'string',
                description:
                  'The label key of the displayed ComboBox menu item '
              },
              sortType: {
                type: 'string',
                enum: ['Asc', 'Desc', 'None']
              },
              showLabel: {
                type: 'boolean',
                description:
                  'To specify whether to set the field label visible or not.'
              },
              readOnlyCondition: {
                type: 'string'
              },
              visibilityCondition: {
                type: 'string',
                description:
                  "makes the component visible if the expression's evaluation is true."
              },
              mandatory: {
                type: 'boolean'
              }
            },
            required: ['readOnly']
          },
          layout: [
            {
              items: [
                {
                  key: 'label'
                },
                {
                  key: 'showLabel'
                },
                {
                  key: 'mandatory'
                },
                {
                  key: 'readOnly'
                },
                {
                  key: 'readOnlyCondition',
                  type: 'textarea'
                },
                {
                  key: 'visibilityCondition',
                  type: 'textarea'
                },
                {
                  key: 'sortType'
                },
                {
                  key: 'styleName'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'actions',
      components: [
        {
          name: 'Button',
          scope: [
            'edit.actions',
            'selector.filter.actions',
            'selector.grid.actions'
          ],
          icon:
            'M 2.898438 8 C 1.316406 8 0 9.316406 0 10.902344 L 0 22.097656 C 0 23.632813 1.253906 25 2.898438 25 L 29.097656 25 C 30.632813 25 32 23.746094 32 22.097656 L 32 10.902344 C 32 9.316406 30.683594 8 29.097656 8 Z M 2.898438 10 L 29.097656 10 C 29.714844 10 30 10.285156 30 10.902344 L 30 22.097656 C 30 22.652344 29.566406 23 29.097656 23 L 2.898438 23 C 2.347656 23 2 22.566406 2 22.097656 L 2 10.902344 C 2 10.285156 2.285156 10 2.898438 10 Z M 9.5 15 C 8.671875 15 8 15.671875 8 16.5 C 8 17.328125 8.671875 18 9.5 18 C 10.328125 18 11 17.328125 11 16.5 C 11 15.671875 10.328125 15 9.5 15 Z M 15.5 15 C 14.671875 15 14 15.671875 14 16.5 C 14 17.328125 14.671875 18 15.5 18 C 16.328125 18 17 17.328125 17 16.5 C 17 15.671875 16.328125 15 15.5 15 Z M 21.5 15 C 20.671875 15 20 15.671875 20 16.5 C 20 17.328125 20.671875 18 21.5 18 C 22.328125 18 23 17.328125 23 16.5 C 23 15.671875 22.328125 15 21.5 15 Z ',
          include: ['edit', 'view', 'search-input', 'searchResult'],
          fieldRequired: false,
          exclude: [],
          properties: {}
        },
        {
          name: 'ButtonContainer',
          container: true,
          icon:
            'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z',
          include: ['edit', 'view', 'search-input', 'searchResult'],
          fieldRequired: false,
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'data',
      components: [
        {
          name: 'DataTable',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z',
          include: ['searchResult'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'panel',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          container: true,
          include: ['edit', 'view'],
          childs: ['TabItem', 'TabItem'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
          container: true,
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'other',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'other1',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'other2',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'other3',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    },
    {
      name: 'other4',
      components: [
        {
          name: 'TabPanel',
          icon:
            'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        },
        {
          name: 'Group',
          icon:
            'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
          include: ['edit', 'view'],
          exclude: [],
          properties: {}
        }
      ]
    }
  ]
};

export const TEMPLATE_LIBRARY = {
  name: 'PalmyraAngularTemplates',
  version: '1.0.1',
  templates: [
    {
      name: 'Edit',
      template: 'edit',
      title: 'Edit',
      sections: [
        {
          name: 'components',
          title: 'Components'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          labelAlignement: {
            type: 'string',
            enum: ['horizontal', 'vertical']
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          },
          componentsBreakpoints: {
            type: 'object',
            properties: {
              xs: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              sm: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              md: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              lg: {
                type: 'number',
                minimum: 1,
                maximum: 12
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'labelAlignement'
            },
            {
              key: 'componentsBreakpoints.xs'
            },
            {
              key: 'componentsBreakpoints.sm'
            },
            {
              key: 'componentsBreakpoints.md'
            },
            {
              key: 'componentsBreakpoints.lg'
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'showTitle'
            }
          ]
        }
      ]
    },
    {
      template: 'selector',
      name: 'Selector',
      sections: [
        {
          name: 'filter',
          title: 'Filter',
          sections: [
            {
              name: 'components',
              title: 'Components'
            },
            {
              name: 'actions',
              title: 'Actions'
            }
          ]
        },
        {
          name: 'grid',
          title: 'Grid',
          sections: [
            {
              name: 'columns',
              title: 'Columns'
            },
            {
              name: 'actions',
              title: 'Actions'
            }
          ]
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          labelAlignement: {
            type: 'string',
            enum: ['horizontal', 'vertical']
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          },
          componentsBreakpoints: {
            type: 'object',
            properties: {
              xs: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              sm: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              md: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              lg: {
                type: 'number',
                minimum: 1,
                maximum: 12
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'labelAlignement'
            },
            {
              key: 'componentsBreakpoints.xs'
            },
            {
              key: 'componentsBreakpoints.sm'
            },
            {
              key: 'componentsBreakpoints.md'
            },
            {
              key: 'componentsBreakpoints.lg'
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'showTitle'
            }
          ]
        }
      ]
    },
    {
      template: 'search',
      name: 'Search',
      sections: [
        {
          name: 'columns',
          title: 'Columns'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          showCheckBoxOnRow: {
            type: 'boolean'
          },
          fitWidth: {
            type: 'boolean'
          },
          enableSorting: {
            type: 'boolean'
          },
          pagination: {
            type: 'object',
            properties: {
              pageSize: {
                type: 'string'
              },
              showCombo: {
                type: 'boolean'
              },
              position: {
                type: 'string'
              },
              pagePossibleSizes: {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            }
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'pagination.pageSize'
            },
            {
              key: 'pagination.position'
            },
            {
              key: 'pagination.pagePossibleSizes',
              type: 'array',
              items: [
                {
                  key: 'pagination.pagePossibleSizes[]',
                  placeholder: 'Page Possible Size'
                }
              ]
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'pagination.showCombo'
            },
            {
              key: 'showCheckBoxOnRow'
            },
            {
              key: 'fitWidth'
            },
            {
              key: 'enableSorting'
            }
          ]
        }
      ]
    },
    {
      name: 'searchInput',
      title: 'Search Input',
      sections: [
        {
          name: 'components',
          title: 'Components'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          defaultCriteria: {
            type: 'string'
          },
          featureName: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          hideOperators: {
            type: 'boolean'
          },
          labelAlignement: {
            type: 'string',
            enum: ['horizontal', 'vertical']
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          },
          componentsBreakpoints: {
            type: 'object',
            properties: {
              xs: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              sm: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              md: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              lg: {
                type: 'number',
                minimum: 1,
                maximum: 12
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'defaultCriteria'
            },
            {
              key: 'labelAlignement'
            },
            {
              key: 'componentsBreakpoints.xs'
            },
            {
              key: 'componentsBreakpoints.sm'
            },
            {
              key: 'componentsBreakpoints.md'
            },
            {
              key: 'componentsBreakpoints.lg'
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'showTitle'
            },
            {
              key: 'hideOperators'
            }
          ]
        }
      ]
    },
    {
      name: 'edit-collection',
      title: 'Edit Collection',
      sections: [
        {
          name: 'columns',
          title: 'Columns'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          showCheckBoxOnRow: {
            type: 'boolean'
          },
          fitWidth: {
            type: 'boolean'
          },
          enableSorting: {
            type: 'boolean'
          },
          pagination: {
            type: 'object',
            properties: {
              pageSize: {
                type: 'string'
              },
              showCombo: {
                type: 'boolean'
              },
              position: {
                type: 'string'
              },
              pagePossibleSizes: {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            }
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'pagination.pageSize'
            },
            {
              key: 'pagination.position'
            },
            {
              key: 'pagination.pagePossibleSizes',
              type: 'array',
              items: [
                {
                  key: 'pagination.pagePossibleSizes[]',
                  placeholder: 'Page Possible Size'
                }
              ]
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'pagination.showCombo'
            },
            {
              key: 'showCheckBoxOnRow'
            },
            {
              key: 'fitWidth'
            },
            {
              key: 'enableSorting'
            }
          ]
        }
      ]
    },
    {
      name: 'view-collection',
      title: 'View Collection',
      sections: [
        {
          name: 'columns',
          title: 'Columns'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      icon: '',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          showCheckBoxOnRow: {
            type: 'boolean'
          },
          fitWidth: {
            type: 'boolean'
          },
          enableSorting: {
            type: 'boolean'
          },
          pagination: {
            type: 'object',
            properties: {
              pageSize: {
                type: 'string'
              },
              showCombo: {
                type: 'boolean'
              },
              position: {
                type: 'string'
              },
              pagePossibleSizes: {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            }
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'pagination.pageSize'
            },
            {
              key: 'pagination.position'
            },
            {
              key: 'pagination.pagePossibleSizes',
              type: 'array',
              items: [
                {
                  key: 'pagination.pagePossibleSizes[]',
                  placeholder: 'Page Possible Size'
                }
              ]
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'pagination.showCombo'
            },
            {
              key: 'showCheckBoxOnRow'
            },
            {
              key: 'fitWidth'
            },
            {
              key: 'enableSorting'
            }
          ]
        }
      ]
    },
    {
      name: 'view',
      title: 'View',
      icon: '',
      sections: [
        {
          name: 'components',
          title: 'Components'
        },
        {
          name: 'actions',
          title: 'Actions'
        }
      ],
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          showTitle: {
            type: 'boolean'
          },
          labelAlignement: {
            type: 'string',
            enum: ['horizontal', 'vertical']
          },
          featureName: {
            type: 'string'
          },
          actions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                template: {
                  type: 'string'
                },
                servicePaths: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      url: {
                        type: 'string'
                      },
                      httpMethod: {
                        type: 'string',
                        enum: [
                          'GET',
                          'POST',
                          'PUT',
                          'HEAD',
                          'DELETE',
                          'CONNECT',
                          'OPTIONS'
                        ]
                      },
                      includeBody: {
                        type: 'boolean'
                      },
                      condition: {
                        type: 'object',
                        properties: {
                          expression: {
                            type: 'string'
                          },
                          evaluationType: {
                            type: 'string',
                            enum: ['client', 'server']
                          },
                          calculationBase: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                screens: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      path: {
                        type: 'string'
                      },
                      navigationType: {
                        type: 'string',
                        enum: ['forward', 'back', 'dialog', 'switch', 'call']
                      }
                    }
                  }
                }
              }
            }
          },
          componentsBreakpoints: {
            type: 'object',
            properties: {
              xs: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              sm: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              md: {
                type: 'number',
                minimum: 1,
                maximum: 12
              },
              lg: {
                type: 'number',
                minimum: 1,
                maximum: 12
              }
            }
          }
        },
        required: []
      },
      layout: [
        {
          items: [
            {
              key: 'title'
            },
            {
              key: 'labelAlignement'
            },
            {
              key: 'componentsBreakpoints.xs'
            },
            {
              key: 'componentsBreakpoints.sm'
            },
            {
              key: 'componentsBreakpoints.md'
            },
            {
              key: 'componentsBreakpoints.lg'
            },
            {
              key: 'actions',
              type: 'array',
              items: [
                {
                  key: 'actions[].name',
                  notitle: true,
                  placeholder: 'name'
                },
                {
                  key: 'actions[].template',
                  notitle: true,
                  placeholder: 'template'
                },
                {
                  key: 'actions[].servicePaths',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].servicePaths[].url',
                      notitle: true,
                      placeholder: 'url'
                    },
                    {
                      key: 'actions[].servicePaths[].httpMethod',
                      notitle: true,
                      placeholder: 'http Method'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.expression',
                      notitle: true,
                      placeholder: 'condition expression'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.evaluationType',
                      notitle: true,
                      placeholder: 'condition evaluation Type'
                    },
                    {
                      key: 'actions[].servicePaths[].condition.calculationBase',
                      type: 'array',
                      items: [
                        {
                          key:
                            'actions[].servicePaths[].condition.calculationBase[]',
                          notitle: true,
                          placeholder: 'calculation Base'
                        }
                      ]
                    },
                    {
                      key: 'actions[].servicePaths[].includeBody',
                      title: 'include Body',
                      placeholder: 'include Body'
                    }
                  ]
                },
                {
                  key: 'actions[].screens',
                  type: 'array',
                  items: [
                    {
                      key: 'actions[].screens[].path',
                      notitle: true,
                      placeholder: 'Screen Path'
                    },
                    {
                      key: 'actions[].screens[].navigationType',
                      notitle: true,
                      placeholder: 'Navigation Type'
                    }
                  ]
                }
              ]
            },
            {
              key: 'showTitle'
            }
          ]
        }
      ]
    }
  ]
};

export const ROLES: Role[] = [
  { name: 'admin' },
  { name: 'vermeg_user' },
  { name: 'simple_user' },
  { name: 'role1' },
  { name: 'role2' },
  { name: 'role3' },
  { name: 'role4' },
  { name: 'role5' },
  { name: 'role6' },
  { name: 'role7' },
  { name: 'role8' },
  { name: 'role9' },
  { name: 'role10' },
  { name: 'role11' },
  { name: 'role12' },
  { name: 'role13' },
  { name: 'role14' },
  { name: 'role15' },
  { name: 'role16' },
  { name: 'role17' },
  { name: 'role18' },
  { name: 'role19' },
  { name: 'role20' },
  { name: 'role21' },
  { name: 'role22' },
  { name: 'role23' }
];
