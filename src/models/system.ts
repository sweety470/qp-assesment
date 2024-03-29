// import mongoose from 'mongoose'

// const systemSchema = new mongoose.Schema({
//     // id:{
//     //     type:Number,
//     // },
//     item:{
//         type:String,
//         required:true
//     },
//     quantity:{
//         type:Number,
//         required:true
//     },
//     category:{
//         type:String
//     },
//     price:{
//         type:BigInt,
//         required:true
//     }

// })

// export const System = mongoose.model('System',systemSchema)

import mongoose, { Schema, Document } from 'mongoose';

interface ISystem extends Document {
    item: string;
    quantity: number;
    category?: string;
    price: bigint;
}

const systemSchema: Schema = new Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number, 
        required: true
    },
    inventory: {
        type: Number, 
        required: false,
        default:0
    }
});

const System = mongoose.model<ISystem>('System', systemSchema);

export { System, ISystem };
