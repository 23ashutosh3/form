const mongoose = require("mongoose");
// const multer =require('multer');
// const path = require('path');
// const AVATAR_PATH=path.join('./uploads/users/avatars')

const formSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  Phone: {
    type: String,
    required: true,
  },

  avatar:
  {
    type:String
  }
});

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", AVATAR_PATH));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });


// formSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
//   "avatar"
// );
// formSchema.statics.avatarPath = AVATAR_PATH;



const Form = mongoose.model("Form", formSchema);

module.exports = Form;
