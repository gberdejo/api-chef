import User from '../models/user'
abstract class UserService {
    public abstract listUsers(): Promise<User[]>;
    public abstract createUser(user:User):Promise<User>;
    public abstract oneUser(id:number): Promise<User | null>
    public abstract updateUser(id:number,user:User):Promise<User | null>
}
export default UserService