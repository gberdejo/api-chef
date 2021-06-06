import User from '../models/user';
import UserService from './userService'
import UserRepository from '../repositorys/userRepository'
import createError from 'http-errors'
class UserServiceImpl implements UserService {

    private user
    constructor() {
        this.user = User
    }
    public async createUser(obj: User): Promise<User> {
        try {
            const user:User = await this.user.create(obj);
            if(!user) {
                throw createError(400,'no se pudo crear')
            }
            return user
        } catch (err) {
            throw err
        }
               
    }
    public async listUsers(): Promise<User[]> {
        try {
            const list: User[] = await this.user.findAll()
            return list;
        } catch (err) {
            throw err
        }
    }
}
export default UserServiceImpl
