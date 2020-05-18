import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explorerHeader',
  pure: false
})
export class ExplorerHeaderPipe implements PipeTransform {
  transform(featureName, args?: any): any {
    if (featureName) {
      return 'Feature: ' + featureName;
    }
    return 'Features';
  }
}
