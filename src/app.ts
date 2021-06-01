import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routerUser from './routes/user.routes';
class App{
   private app:Application;
    constructor(){
        this.app = express();
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings(){
    
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }
    middlewares(){

    }
    routes(){
        this.app.use(routerUser)
        this.app.use((req,res)=>{
            res.json({msg:'gaa'})
        })
    }
    listen(){
        this.app.listen(4000,()=>{
            console.log('server run')
        })
    }
}

export default new App;
   