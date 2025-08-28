//Todas as rotas
import { Router } from "express";
import { createCategoryController, DeleteCategoryController, readAllCategoryController, readProductCategoryController, updateCategoryController } from "../controllers/category.controller";
import { createProductController, deleteProductController, readAllProductController, readOneProductController, updateProductController } from "../controllers/product.controller";
import { createStatusController, deleteStatusController, realAllStatusController } from "../controllers/status.controller";


export const routes: Router = Router()
/*
routes.post('/events',createEventController)
routes.get('/events',readAllEventController)
routes.patch('/events/:id',updateEventController)
routes.delete('/events/:id',DeleteEventController)
*/

//Rotas do category
routes.post('/category',createCategoryController)
routes.get('/category',readAllCategoryController)
routes.patch('/category/:id',updateCategoryController)
routes.delete('/category/:id',DeleteCategoryController)
routes.get('/category/:id/product',readProductCategoryController)

//Products
routes.post('/product',createProductController)
routes.get('/product',readAllProductController)
routes.patch('/product/:id',updateProductController)
routes.delete('/product/:id',deleteProductController)
routes.get('/get/product/:id',readOneProductController)


//Status
routes.post('/status',createStatusController)
routes.get('/status',realAllStatusController)
routes.delete('/status/:id',deleteStatusController)
