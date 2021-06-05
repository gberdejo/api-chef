import User from '../models/user'
abstract class UserService {
    public abstract listUsers(): Promise<User[]>;
}
export default UserService