import User from "../models/User.js";

// Find the allUser from our DataBase
export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({success:true, status:200,message:'The User data fetch request run succesfully..Please find the User Data',data:users});
  } catch (err) {
    res.status(500).json({ success:false ,status:500,message:"Server error while fetching user",error: err.message });
  }
};

// Find Single User with userId  
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({sucess:false,status:404, error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({success:false ,status:500,message:"Server error while fetching user",error: err.message });
  }
};

// Create new User 
export const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({success:true ,status:201,message:"User created successfully" , data:user});
  } catch (err) {
    res.status(400).json({success:false ,status:400,message:"Bad request – invalid user data" ,error: err.message });
  }
};

// Login existing User

export const loginUser = async (req ,res)=>{
  
}
