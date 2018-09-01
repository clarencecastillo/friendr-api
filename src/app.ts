import * as express from 'express';

import { index } from './routes/index.route';

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', index);

// listen to the app
app.listen(port, () => console.log(`Listening at http://localhost:${port}/`))