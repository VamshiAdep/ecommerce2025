import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js"; // ✅ Import products data
import users from "./data/users.js"; // ✅ Import users data
import Product from "./models/productModel.js";
import User from "./models/userModel.js";


dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany(); // ✅ Clear existing users
    const createdUsers = await User.insertMany(users); // ✅ Insert users first

    const adminUser = createdUsers[0]._id; // ✅ Assign first user as admin

    const productsWithUser = products.map((product) => ({
      ...product,
      user: adminUser, // ✅ Assign user ID dynamically
    }));

    await Product.deleteMany(); // ✅ Clear existing products
    await Product.insertMany(productsWithUser); // ✅ Insert new products

    console.log("✅ Users & Products Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
