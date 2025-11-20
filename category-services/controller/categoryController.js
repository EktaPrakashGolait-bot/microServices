import Category from "../models/category.js";

// Create category
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    return res.status(201).send ({success:true ,status:201,message:"Category data created successfully" , data:category});
  } catch (err) {
   return res.status(500).json({ success:false,status:500,message:'Please fill all required filled properly',error: err.message });
  }
};

// Get all categories
export const findAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({success:true,status:200, message:"The Categories data fetch request run successfully..Please find the User Data",data:categories});
  } catch (err) {
    return res.status(500).json({ success:false,status:500,message:'Something want wrong',error: err.message });
  }
};
