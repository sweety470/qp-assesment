import express,{Request,Response} from 'express'
import { System } from '../models/system';
import { Cart } from '../models/cart';


const UserController = {

   viewGroceryItem:async(req:Request,res:Response) =>{
      try {
          
          let groceryItem = await System.find()
  
          res.status(201).json({ message: 'Grocery item fetched successfully', groceryItem });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
     },

     addItemToCart:async(req:Request,res:Response) =>{
        try {
            const { email, item } = req.body;
    
            let existingCartItem = await Cart.findOne({ email ,item});
            
            
            if (existingCartItem) {
                // If the item already exists, update the quantity
                // existingCartItem.items.push({ item: item });
                existingCartItem.quantity += 1;
                existingCartItem.price += existingCartItem.quantity; // Note: This calculation might need to be adjusted based on your logic
                await existingCartItem.save();
                return res.status(200).json({ message: 'Quantity updated in cart successfully', item: existingCartItem });
            } else {
                // If the item doesn't exist, add it to the cart
                let addCart = new Cart({ email, item: item});
                await addCart.save();
                return res.status(201).json({ message: 'Item added to cart successfully', item: addCart });
            }
        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({ error: 'Internal server error' });
        }
       },
    
   
}

export {UserController}


