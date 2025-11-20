import { Router } from "express";
import { findAllCategories, createCategory }from "../controller/categoryController.js";

const router = Router();

router.get("/", (_req, res) => res.json({ service: "Category Service", ok: true }));
router.get("/category", findAllCategories);
router.post("/CreateCategory", createCategory);

export default router;
