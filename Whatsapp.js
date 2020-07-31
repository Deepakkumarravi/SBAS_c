const client = require('twilio')('AC4fff25801b21aaf1b632ac2f7b355429','60c5f40bdd30d84f50715955bea40514');

client.messages.create({
    from: 'whatsapp:+14155238886',
    to:   'whatsapp:+916374424107',
    body: 'Message from Bannari amman Silks Sekar'
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})