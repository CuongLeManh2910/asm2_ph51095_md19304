const mongoose = require("mongoose");

const mongoURI ="mongodb+srv://cuonglmph51095:lemanhcuong2005@cluster0.oskcp.mongodb.net/ASM";

// Hàm kết nối
const connect = async () => {
  try {
    await mongoose.connect(mongoURI); 
    console.log("Kết nối MongoDB thành công");
  } catch (error) {
    console.error("Kết nối thất bại: ", error);
  }
};

module.exports = { connect };
