import Category from '../models/category'
import CategoryService from './categoryService'
import createError from 'http-errors'
import { Op } from 'sequelize'
import { nanoid } from 'nanoid'
class CategoryServiceImpl implements CategoryService {

    private category
    constructor() {
        this.category = Category
    }
    public async getOneCategory(id: string): Promise<Category> {
        try {
            const obj: Category | null = await this.category.findOne({
                where: { id }
            })
            if (!obj) throw createError(404, `No se encontro el id ${id}`)
            return obj
        } catch (err) {
            throw err
        }
    }
    public async listCategory(): Promise<Category[]> {
        try {
            const list: Category[] = await this.category.findAll({
                order: [['category', 'ASC']]
            })
            return list
        } catch (err) {
            throw err
        }
    }
    public async editCateogry(id: string, obj: any): Promise<Category> {
        try {
            const {category} = obj
            await this.category.update({
                category
            },{
                where:{
                    id
                }
            })
            const cat: Category = await this.getOneCategory(id)
            return cat
        } catch (err) {
            throw err
        }
    }
    public async deleteCategory(id: string): Promise<string> {
        try {
            await this.category.destroy({
                where: { id }
            })
            return `Se elimino, con el id ${id}`
        } catch (err) {
            throw err
        }
    }
    public async createCategory(category: string): Promise<Category> {
        try {
            const cate = this.category.build({ category })
            await cate.save()
            return cate
        } catch (err) {
            throw err
        }
    }


}
export default CategoryServiceImpl