import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env properly
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.USER_SERVICE_PORT || 4001;

app.use(express.json());




// ✅ Use routes
app.use("/", userRoutes);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");


    // Start server only after DB connects
    app.listen(PORT, () => {
      console.log(`👤 User service running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
  });


