import User from '../models/user'
class UserRepository {

    private user
    constructor() {
        this.user = User
    }

    public async listUsers(): Promise<User[]> {
        try {
            const list: User[] = await this.user.findAll()
            console.log(list)
            return list;
        } catch (error) {
            throw error
        }
    }

}
export default UserRepository

