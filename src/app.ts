import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan, { format } from 'morgan';
import routerUser from './routes/user.routes';
import routerCategory from './routes/categoty.routes';
import sequelize from './db'
import Recipe from './models/recipe';
import Type from './models/type';
import User from './models/user';
import  {server} from './config'
class App {
    private app: Application
    constructor() {
        this.app = express();
        this.settings()
        this.middlewares()
        this.routes()

    }
    private settings(): void {
        this.app.set('port', server.PORT)

    }
    private middlewares(): void {
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())

    }
    private routes(): void {

        this.app.use('/api', routerUser)
        //!this.app.use('/api', routerCategory)
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
    public listen(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port: ${this.app.get('port')}`)
            Type.sync({alter: true})
        })
    }
}

export default new App;
