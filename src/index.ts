import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userController from './controllers/User.controller.ts';

// require('dotenv').config();

const port = 8080;
const hostname = '127.0.0.1';

export const app: Application = express();
app.use(cors());

app.use(express.json());

app.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    await userController({ email: req.body.email, user: req.body.user });
});

app.listen(port, hostname, () => {
    console.log('Server is running on port 8080');
});
