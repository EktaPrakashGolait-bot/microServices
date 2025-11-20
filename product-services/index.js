import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import express from "express"; // adjust if not needed
import productRoutes from "./routes/productRoutes.js"; 


// Setup __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Debug check
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PRODUCT_SERVICE_PORT || 4003;

// Connect MongoDB (only once)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(express.json());
app.use("/", productRoutes);


app.listen(PORT, () => {
  console.log(`📦 Product service running at http://localhost:${PORT}`);
});
