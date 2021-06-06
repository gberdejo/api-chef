import Category from '../models/category'
abstract class CategoryService{
    public abstract createCategory(obj:Category) :Promise<Category>
    public abstract listCategory(): Promise<Category[]>
    public abstract getOneCategory(id: number): Promise<Category>
    public abstract editCateogry(id : number, obj : Category) : Promise<Category>
    public abstract deleteCategory(id: number): Promise<string>
}
export default CategoryService