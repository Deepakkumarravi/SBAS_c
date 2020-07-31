const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp()
require('dotenv').config()

// const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification = functions.firestore.document('Customers/{docId}')
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            service: 'Gmail',
            secure: true,
            auth: {
                user: 'deepaksampledemo@gmail.com',
                pass: 'Sribannari'
            }
        });
        authData.sendMail({
            from: 'deepaksampledemo@gmail.com',
            to: 'sribannariammansilks@gmail.com',
            subject: 'Your submission Info',
            text: `CustomerName: ${data.CustomerName} \n\n ContactInformation : ${data.ContactInformation} \n\n Message: ${data.Message}`
        }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));

    });


