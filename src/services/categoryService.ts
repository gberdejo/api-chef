import Category from '../models/category'
abstract class CategoryService {
    public abstract createCategory(category: string): Promise<Category>
    public abstract listCategory(): Promise<Category[]>
    public abstract getOneCategory(id: string): Promise<Category>
    public abstract editCateogry(id: string, obj: Category): Promise<Category>
    public abstract deleteCategory(id: string): Promise<string>
}
export default CategoryService