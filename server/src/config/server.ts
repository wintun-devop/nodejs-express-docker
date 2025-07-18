import express, { Application } from 'express';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { routes } from '../routes';

dotenv.config();

const basePath = process.env.BASE_PATH;

// declare instance
const app:Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middlewares
app.use(express.json());


// routes
app.use(`${basePath}`, routes);

export default app;

