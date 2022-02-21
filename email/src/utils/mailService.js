const nodemailer = require("nodemailer");

const mailTransport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});

const companyEmail = "noreply@comapny.com";

const admins = [
    'a@gmail.com',
    'b@gmail.com',
    'c@gmail.com',
    'd@gmail.com',
    'e@gmail.com'
];

const sendMail = async ( user ) => {
    const userMsg = {
        from: `"Company" <${companyEmail}>`,
        to: user.email,
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
        text: `Hi ${user.first_name}, Please confirm your email address`,
    };

    await mailTransport.sendMail(userMsg);

    for ( const admin of admins ){
        let time = Date.now();
        let a;
        while ( Date.now() - time < 400 ) a++; 
        await mailTransport.sendMail({
            from: `"Company" <${companyEmail}>`,
            to: admin,
            subject: `${user.first_name} ${user.last_name} has registered with us`,
            text: `Please welcome ${user.first_name} ${user.last_name}`
        })
    }   
};

module.exports = sendMail;