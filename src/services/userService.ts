import User from '../models/user'
abstract class UserService {
    public abstract listUsers(): Promise<User[]>;
    public abstract createUser(user:User):Promise<User>;
}
export default UserService