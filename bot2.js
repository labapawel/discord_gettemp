const Discord = require('discord.js');
const client = new Discord.Client();
const auth2 = "NTc4OTU3NjA2Mjc4NjYwMTI2.XOgBRQ.SzF8EyPd58JTX4qMtgCU9tf-KC8";
const request = require('request');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
   if (msg.author.bot)
    return; 
  
   if (msg.content === 'temp') {

    request('http://wsi.ovh/droiddata', 
        { json: true }, 
        (err, res, body) => {
            if (err) { return console.log(err); }

     //   console.log(body);
        for(var i in body)
        if(i % 2 == 0)
        msg.reply("Sensor: "+body[i].sensor+ 
                  " temperatura: "+body[i].temp + 
                  " czas: "+body[i].created_at);
    });
   


  } else
   if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(auth2);