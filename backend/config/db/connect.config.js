import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
await mongoose.connect (process.env.MONGO_URL)
console.log(`MongoDB conectado exitosamente!!`);
    }

    catch (error){
        console.error (error);
        process.exit (1)
    }
}