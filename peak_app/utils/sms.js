const Africastalking = require("africastalking")
const dotenv = require("dotenv")
dotenv.config()

//initiate africatalkig API
const at =Africastalking({
    apiKey:process.env.AFRICAS_API,
    username:"sandbox"
}) 
const sms = at.SMS;

async function sendSMS(){
    const options = {
        to: ['+254748127381'], // Parent's phone number(s)
        message: 'Reminder: Peak Performance tutoring starts on April 14th at Kinoo Polytechnic! Ensure to register early as slots are limited.',
        from: 'Peak performance' // Using registered sender ID
    };
    try {
        const response = await sms.send(options);
        console.log(response);
    }catch(error){
        console.log(error)
    }
    
}
