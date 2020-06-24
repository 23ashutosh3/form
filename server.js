const express = require("express");
 const path = require("path");
//give host to run
const port = 8000;

// const path = require("path");

//database

const db = require("./config/mongoose");

const Form = require("./models/forms");



const app = express();

//view engine
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.use(express.static("assets"));


app.use("/uploads", express.static(__dirname + "/uploads"));


app.get("/", function (req, res) {
  return res.render("home", {
    title: "Form",
  });
});

var multer=require('multer');
var storage=multer.diskStorage(
  {
    destination:function(req,file,cb)
    {
      cb(null,'./uploads');

    },
   filename:function(req,file,cb)
   {
     cb(null,Date.now()+file.originalname);
   },


  }
);

var imageFilter = function(req,file,cb)
{
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i))
  {
    return cb(new Error('Only image files are allowed'),false);
  }
  cb(null,true);


};

var upload=multer({
  storage,fileFilter:imageFilter
})

app.post("/create-form",upload.single('avatar'), function (req, res) {
  console.log(req.body);

  Form.create(
    {
      Firstname: req.body.name[0],
      Lastname: req.body.name[1],
      Email: req.body.email,

      Phone: req.body.phone,

      avatar:req.file.filename



    },



    
    function (err, newForm) {
      if (err) {
        console.log("error in creating a form", err);
        return;
      }

      console.log("*******", newForm);
      return res.redirect("back");
    }
  );
});



// app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log("err in server");
  }

  console.log("yup my express server running", port);
});
