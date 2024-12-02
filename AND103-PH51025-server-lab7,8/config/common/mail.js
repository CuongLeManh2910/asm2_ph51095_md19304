var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "cuonglmph51095@gmail.com",
        pass: "nenf mvun wfls kvtj"
    }
});
module.exports = transporter 