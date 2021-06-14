import User from '../models/user';
import UserService from './userService'
import createError from 'http-errors'
import { nanoid } from 'nanoid'
class UserServiceImpl implements UserService {

    private user
    constructor() {
        this.user = User
    }
    public oneUser(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }
    public updateUser(id: number, user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }
    public async createUser(obj: User): Promise<User> {
        try {
            const user: User = this.user.build(obj);
            //user.id = nanoid()
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
