import express from 'express';
import { userRoutes } from './src/routes/userRoutes.js';
import { postRoutes } from './src/routes/postRoutes.js';
import { startDb } from './src/config/database.js';
import path from 'node:path'
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet'
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();


//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet({
    contentSecurityPolicy: false
}))


app.use(express.static(path.join(__dirname, "public")))

app.set('views', path.join(__dirname, "src", "views"))
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;

app.use('/users', userRoutes)

app.use('/posts', postRoutes)

app.listen(port, () => {
    console.log(`El servidor está en funcionamiento en http://localhost:${port}`);
    startDb();
  });
