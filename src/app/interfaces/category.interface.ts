import { SubCategory } from './subcategory.interface';

export interface Category {
  categoryId: number;
  category: string;
  categoryName: string;
  subCategories: SubCategory[];
}
