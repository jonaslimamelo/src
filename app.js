import express from 'express';
import routes from './routes.js';

const app = express();

//indica pro express ler!
app.use(express.json());

//usar o routes;
app.use(routes)

export default app;

