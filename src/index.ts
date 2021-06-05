import app from './app'
import path from 'path'
import { config as dotenv } from 'dotenv'
dotenv({ path: path.join(__dirname, '../', '.env') })
app.start();