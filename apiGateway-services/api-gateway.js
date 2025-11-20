// go up one folder to root
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";


const app = express();
const PORT = process.env.GATEWAY_PORT || 4000;

// ✅ User Service

app.use(
  "/api/users",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
    })
  );

// ✅CATEGORY SERVICE

app.use("/api/categories", createProxyMiddleware({
    target:"http://localhost:4002", // category-service port
    changeOrigin: true, 
    
}));

// ✅PRODUCT SERVICE (Protected by JWT)

app.use("/api/products", 
    createProxyMiddleware({
        target:"http://localhost:4003", // product-service port
        changeOrigin: true,        
    })
);


// ✅DEFAULT 404// Catch-all for undefined routes

app.get("/", (req, res) => {
  res.send("✅ API Gateway is running...");
});

app.listen(PORT, () => {
  console.log(`🚪 API Gateway running at http://localhost:${PORT}`);
});

