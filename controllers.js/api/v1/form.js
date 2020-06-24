const Form = require("../../../models/forms");

module.exports.form = async function (req, res) {
  try {
    if (!req.body) {
      return res.json(400, {
        message: "form can not empty",
      });
    }

    // const Form = await Question.findOne({ ques: req.body.ques });

    // if (question) {
    //   return res.json(200, { question: question });
    // }

    const newform = await Form.create({
      Firstname: req.body.name[0],
      Lastname: req.body.name[1],
      Email: req.body.email,

      Phone: req.body.phone,

      avatar: Form.avatarPath +'/'+req.file.filename,
    });

   
    

    return res.json(200, {
      message: "form created",
      Form: newform,
    });
  } catch (err) {
    return res.json(500, {
      message: "internal error",
    });
  }
};
