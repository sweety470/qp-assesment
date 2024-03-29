

import express, { Router, Request, Response } from 'express';
import  {AdminController}  from '../controllers/admin';
import { UserController } from '../controllers/user';

const router: Router = express.Router();

router.get('/demo', (req: Request, res: Response) => {
    res.send("hi");
});

router.post('/admin/addItem', AdminController.addGroceryItem);
router.get('/admin/viewItem', AdminController.viewGroceryItem);
router.get('/admin/viewItem/:id', AdminController.viewGroceryItemById);
router.delete('/admin/deleteItem/:id', AdminController.removeGroceryItem);
router.patch('/admin/updateItem/:id', AdminController.updateGroceryItem);
router.post('/admin/inventory/:id', AdminController.inventoryGroceryItem);

// user
router.get('/user/viewItem', UserController.viewGroceryItem);
router.post('/user/addItemToCart', UserController.addItemToCart);

export { router };
