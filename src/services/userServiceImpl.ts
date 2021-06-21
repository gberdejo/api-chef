import User from '../models/user';
import UserService from './userService'
import createError from 'http-errors'
import { nanoid } from 'nanoid'
class UserServiceImpl implements UserService {

    private user
    constructor() {
        this.user = User
    }
    public async oneUser(id:number): Promise<User | null> {
        try {
            const user:User | null = await this.user.findByPk(id)
            return user;
        } catch (err) {
            throw err
            
        }
    }
    public async updateUser(id: number, user: User): Promise<User | null> {
        try {
            
            await this.user.update({
                name: user.name,
                lastname: user.lastname,
                age: user.age
            },{
                where: {id}
            })
            const obj:User | null = await this.oneUser(id)
            return obj
        } catch (err) {
             throw err
        }
    }
    public async createUser(body: User): Promise<User> {
        try {
        
            const user: User =  this.user.build({
                name: body.name,
                lastname: body.lastname,
                age: body.age,
                email: body.email,
                password: body.password
            });
            await user.save()
            return user
        } catch (err) {
            console.log(err)
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
