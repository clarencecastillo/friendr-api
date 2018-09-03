import * as express from 'express';
import { Router, Request, Response } from 'express';

import { index } from './routes/index.route';
import { userRouter } from './routes/user.route';

const app: express.Application = express();
const port = process.env.PORT || 3000;

const apiRouter: Router = Router();

apiRouter.use('/users', userRouter);

app.use('/api/v1', apiRouter);

// listen to the app
app.listen(port, () => console.log(`Listening at http://localhost:${port}/`))