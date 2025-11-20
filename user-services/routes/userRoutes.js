import express from "express";
import { getUsers, getUser, addUser } from "../controller/userController.js";

const router = express.Router();

// Health check route
router.get("/", (_req, res) => res.json({ service: "User Service", ok: true }));

// User routes
router.get("/users", getUsers);
router.get("/:id", getUser);
router.post("/register", addUser);

export default router;
