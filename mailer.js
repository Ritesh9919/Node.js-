
//1.import nodemailer
const nodemailer = require('nodemailer');

//2. configure email and send it

function sendMail() {
    //1. create email transporter
    // SMTP (simple mail transfer protocol)
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     host : 'smtp.gmail.com',
    //     port : 587,
    //     secure : false,
        
    //      auth: {
    //         user: 'riteshkumar411552@gmail.com',
    //         pass: 'djdlirowqhdbltuy'
    //     },

        
    // });

    // // 2.configure email content
    // const mailOption = {
    //     from: 'riteshkumar411552@gmail.com',
    //     to: 'riteshmaurya738829@gmail.com',
    //     subject: 'Welcome to node.js app',
    //     text: 'This is eamil using nodemailer in node.js'
    // }

    // //3. send email
    // try {
    //     const result = await transporter.sendMail(mailOption);
    //     console.log('mail sent succefully');
        
        
    // } catch (error) {
    //     console.log('Email send fail error: ', error);
    // }

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'securesally@gmail.com', 
            pass: 'lscauxqfkqpqacwi', 
        },
    });
    
    let mailOptions = {
        from: 'securesally@gmail.com',
        to: 'riteshkumar411552@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
           console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }


});
}

sendMail();
