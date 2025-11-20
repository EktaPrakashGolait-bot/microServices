import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import categoryRouter from "./routes/categoryRoutes.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") }); // guaranteed to load

// now process.env.MONGO_URI will not be undefined
import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(express.json());
app.use("/",categoryRouter);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
const PORT = process.env.CATEGORY_SERVICE_PORT || 4002;

app.listen(PORT, () => {
  console.log(`📂Category service running at http://localhost:${PORT}`);
});

