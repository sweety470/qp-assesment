import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

mongoose.connect(process.env.MONGODB_ATLAS_URL!, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb database is connected");
}).catch((error) => {
    console.log("Error------------------", error);
});
