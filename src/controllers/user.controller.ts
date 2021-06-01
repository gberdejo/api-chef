import {Handler} from 'express';
class UserController{
    public home:Handler = (req,res)=>{
        res.send("<h1>Hola perrú</h1>")
    }
    
}

export default new UserController;