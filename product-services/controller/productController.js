import Product from "../models/product.js";
import Category from "../models/category.js"; 
import user from "../models/user.js"

// Create product
export const createProduct = async (req, res) => {
  try {
    const { name, price, categoryId, userId } = req.body;
    const product = await Product.create({ name, price, categoryId, userId });
    return res.status(201).send ({success:true ,status:201,message:"products created successfully" , data:product});
  } catch (err) {
    return res.status(500).json({ success:false,status:500,message:'Please fill all required filled properly',error: err.message });
  }
};

// Get all products with relations
export const findAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("categoryId") // fetch category data
      .populate("userId");    // fetch user data
    return res.status(200).json({success:true,status:200, message:" The product data fetch request run successfully..Please find the User Data",data:products});
  } catch (err) {
    return res.status(500).json({ success:false,status:500,message:'Something want wrong',error: err.message });
  }
};
