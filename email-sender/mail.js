const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service : 'gmail',
    secure: false, // use SSL
      port: 25, // port for secure SMTP
    auth : {
        user : 'lahialassane99@gmail.com',
        pass : 'uafn oyfj zytn dnto',
    },
      tls: {
          rejectUnauthorized: false
      }
});

const mailOptions = {
    from : 'lahialassane99@gmail.com',
    to : 'toto123@yopmail.com',
    subject : 'Send mail with node',
    text : 'Hello world',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'

};
// transporter.verify(function(error, success) {
//     if (error) {
//           console.log(error);
//     } else {
//           console.log('Server is ready to take our messages');
//     }
//   });
transporter.sendMail(mailOptions , (err , info) => {
    if (err) {
        console.log(err);
    }
    console.log('Email sent successfully : ' + info);
});

