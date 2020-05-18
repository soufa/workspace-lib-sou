import { ScreenTemplate } from './screen-template.model';

export interface ScreensLibraryModel {
  name: string;
  version: string;
  templates: ScreenTemplate[];
}
