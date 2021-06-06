import User from '../models/user'
import createError from 'http-errors'
class UserRepository {

    private user
    constructor() {
        this.user = User
    }

    public async listUsers(): Promise<User[]> {
        try {
            const list: User[] = await this.user.findAll()
            return list;
        } catch (err) {
            throw err
        }
    }
    public async createUser(obj : User): Promise<User>{
        try {
            const user:User = await this.user.create(obj);
            if(!user) {
                throw createError(400,'no se pudo crear')
            }
            return user
        } catch (error) {
            throw error
        }
    }

}
export default UserRepository

