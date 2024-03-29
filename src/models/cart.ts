import mongoose, { Schema, Document } from 'mongoose';

interface ICart extends Document {
    name: string;
    email: number;
    item?: string;
    quantity: number; // Change type to 'number',
    price:number
}

const cartSchema: Schema = new Schema({
    name: {
        type: String,
        // required: false
    },
    email: {
        type: String,
        required: true
    },
    item: {
        type: String
    },
    quantity: {
        type: Number, // Corrected type to 'Number'
        required: false,
        default:1
    },
    price: {
        type: Number, // Corrected type to 'Number'
        // required: true
        default:10
    }
});

const Cart = mongoose.model<ICart>('Cart', cartSchema); // Changed model name from 'System' to 'Cart'

export { Cart, ICart }; // Export Cart instead of System
