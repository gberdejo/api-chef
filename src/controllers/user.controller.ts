import { Handler } from 'express';
import User from '../models/user';
import UserServiceImpl from '../services/userServiceImpl'
import sequelize from 'sequelize'
import createError from 'http-errors'
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
            console.log(err instanceof sequelize.Error)
            if(err instanceof sequelize.Error){
                next(createError(400,'invalid select'))
            }
            next(err)
        }

    }
    public inserUser: Handler = async (req,res,next)=>{
        try {
            const user :User = await this.user.createUser(req.body);
            res.status(200).json(user)
        } catch (err) {
            if(err instanceof sequelize.Error){
                return next(createError(429,err,'Inalido user'))
            }
            next(err)
        }
    }

}

export default new UserController;