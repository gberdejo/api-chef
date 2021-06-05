import { Handler } from 'express';
import User from '../models/user';
import UserServiceImpl from '../services/userServiceImpl'
class UserController {
    private user: UserServiceImpl
    constructor() {
        this.user = new UserServiceImpl
    }
    public home: Handler = async (req, res, next) => {
        try {
            const list: User[] = await this.user.listUsers()
            res.status(200).json(list)
        } catch (err) {
            next(err)
        }

    }

}

export default new UserController;