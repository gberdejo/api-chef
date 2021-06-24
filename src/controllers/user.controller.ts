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
    public createUser: Handler = async (req, res, next) => {
        try {
            const user: User  = await this.user.createUser(req.body)
            res.status(200).json(user) 
        } catch (err) {
            console.log(err)
            if(err instanceof sequelize.ValidationError){
                next(createError(400,err))
            }
            next(err)
        }

    }
    public oneUser: Handler = async (req,res,next)=>{
        try {
            const user :User | null = await this.user.oneUser(Number(req.params.id))
            if(!user) res.status(400).json({status:400,message:"Warning",data: "LOco de m"})
            res.status(200).json(user)
        } catch (err) {
            if(err instanceof sequelize.ValidationError){
                return next(createError(400,err))
            }
            next(err)
        }
    }
    public updateUser: Handler = async (req,res,next) => {
        try {
            const user :User | null = await this.user.updateUser(Number(req.params.id),req.body)
             res.status(200).json(user)
        } catch (err) {
              if(err instanceof sequelize.ValidationError){
                return next(createError(400,err))
            }
            next(err)
        }
    }
    public listUser: Handler = async (req,res,next) => {
        try {
            const list: User[] = await this.user.listUsers();
            res.status(200).json(list)
        } catch (err) {
             if(err instanceof sequelize.ValidationError){
                return next(createError(400,err))
            }
            next(err)
        }
    }

}

export default new UserController;