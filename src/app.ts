import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan, { format } from 'morgan';
import routerUser from './routes/user.routes';
import routerCategory from './routes/categoty.routes';
import sequelize from './db'
import Category from './models/category'
import User from './models/user'
import Type from './models/type'
import Recipe from './models/recipe'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './awaggerOptions'
class App {
    private app: Application
    private specs: any
    constructor() {
        this.app = express();
        this.settings()
        this.middlewares()
        this.routes()
        dotenv.config()

    }
    private settings(): void {
        this.app.set('port', process.env.PORT || 3000)

    }
    private middlewares(): void {
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())

    }
    private routes(): void {

        this.app.use('/api', routerUser)
        this.app.use('/api', routerCategory)
        this.specs = swaggerJSDoc(options)
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(this.specs))
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            const err = new Error(`Not Fount - ${req.originalUrl}`)
            res.status(404)
            next(err)
        })
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(err.status || 500)
            res.json({
                status: err.status,
                message: err.message,
                stack: err.stack
            })
        })
    }
    private models(): Promise<unknown> {
        return new Promise(async (resolve, reject) => {
            try {
                Type.hasMany(Recipe)
                Recipe.belongsTo(Type)

                Category.hasMany(Recipe)
                Recipe.belongsTo(Category)

                User.hasMany(Recipe)
                Recipe.belongsTo(User)

                sequelize.sync();
                resolve("-->> Tables sync!")
            } catch (err) {
                console.log(err)
                reject(err)
            }
        })
    }
    public start(): void {
        sequelize.authenticate()
            .then(() => {
                console.log('DataBase Connection!')
                //return this.models()
                this.listen()
            })
            /*.then((info) => {
                console.log(info)
                this.listen()
            })*/
            .catch((err) => console.log(err))

    }
    private listen(): void {

        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port: ${this.app.get('port')}`)
        })
    }
}

export default new App;
