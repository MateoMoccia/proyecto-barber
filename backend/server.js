import app from "./src/app.js";
import { connectToMongoDB } from './config/db/connect.config.js';
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToMongoDB();
  } catch (error) {
    console.error("Error conectando MongoDB:", error);
  }

  app.listen(PORT, () =>
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
  );
};

startServer ();