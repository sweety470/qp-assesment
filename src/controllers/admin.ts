import express,{Request,Response} from 'express'
import { System } from '../models/system';


const AdminController = {


   addGroceryItem:async(req:Request,res:Response) =>{
    try {
        const {item,quantity,category,price} = req.body 

        let groceryItem = new System({item,quantity,category,price})
        console.log("--------------------------",groceryItem)
        await groceryItem.save()

        res.status(201).json({ message: 'Grocery item added successfully', groceryItem });
    } catch (error) {
      console.log("check error------------------",error)
      res.status(500).json({ error: 'Internal server error' });
    }
   },

   viewGroceryItem:async(req:Request,res:Response) =>{
      try {
          
          let groceryItem = await System.find()
          console.log("----------------------",groceryItem)
  
          res.status(201).json({ message: 'Grocery item fetched successfully', groceryItem });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
     },

     viewGroceryItemById:async(req:Request,res:Response) =>{
      try {
          const id = req.params.id
          let groceryItem = await System.findById({_id:id})
          
  
          res.status(201).json({ message: 'Grocery item fetched successfully', groceryItem });
      } catch (error) {
        console.log("error================",error)
        res.status(500).json({ error: 'Internal server error' });
      }
     },
     removeGroceryItem:async(req:Request,res:Response) =>{
      try {
          
         const id = req.params.id;

         // Find the grocery item by id and remove it
         const deletedItem = await System.findByIdAndDelete(id);
         console.log("--------------111111111111",deletedItem)
 
         if (!deletedItem) {
             return res.status(404).json({ error: 'Grocery item not found' });
         }
 
         res.json({ message: 'Grocery item removed successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
     },
     updateGroceryItem:async(req:Request,res:Response) =>{
      try {
          
         const id = req.params.id;

         const { item, quantity,price } = req.body;

         const groceryItem = await System.findByIdAndUpdate(id, { item, quantity,price }, { new: true });
 
         if (!groceryItem) {
             return res.status(404).json({ message: 'Grocery item not found' });
         }
 
         res.json({ message: 'Grocery item updated successfully', groceryItem });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
     },
     inventoryGroceryItem:async(req:Request,res:Response) =>{
      try {
          
         const id = req.params.id;

         const { inventory } = req.body;
         let item = await System.findById({_id:id})
 
         if (!item) {
             return res.status(404).json({ message: 'Grocery item not found' });
         }
 
         await System.findByIdAndUpdate(id, { inventory }, { new: true });
         res.json({ message: 'Inventory level updated successfully', item });
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
      }
     }
}

export {AdminController}


