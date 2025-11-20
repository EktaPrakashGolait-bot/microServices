
import express from "express";
import { findAllProducts, createProduct } from "../controller/productController.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Product service is running 🚀" });
});
router.get("/find", findAllProducts);
router.post("/add", createProduct);

export default router;   // <-- default export
