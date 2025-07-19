import express from 'express';


// import routes
import { defaultRoute } from './default';
import { productRoute,productSearchRoute } from './products';


// declare the routes for router
export const routes = express.Router();

// register routes
routes.use("/health",defaultRoute)
routes.use("/product",productRoute)
routes.use("/products",productSearchRoute)
