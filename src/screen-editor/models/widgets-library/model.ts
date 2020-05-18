import { Category } from './category';

export interface WidgetsLibraryModel {
  name: string;
  version: string;
  categories: Category[];
  error: string;
}
