const Discord = require('discord.js');
const client = new Discord.Client();
const auth2 = "NTc4OTU3NjA2Mjc4NjYwMTI2.XOgBRQ.SzF8EyPd58JTX4qMtgCU9tf-KC8";
const request = require('request');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);


});

function test(uid){
 if(uid == '503111371106418698')
    throw new Error("---------------- Problem -----------------");
}

client.on('message', msg => {
  
   if (msg.author.bot)
    return; 

    if(/(ala|ma|kota)/gi.test(odp)){
    var odp  = msg.content;
    while(/(ala|ma|kota)/gi.test(odp))
    {
        var szukaj = /(ala|ma|kota)/gi.exec(odp)[0];
        odp = odp.replace(szukaj,'**'+szukaj+'**');

    }
    msg.reply(odp);
  
    }

    console.log(msg.content);
   if(msg.content === "user")
   {
    console.log('------------------------');
    console.log(client.users.array());

    var users = client.users.array();
    for(var i in users)
    {
     // console.log(users[i].id);

      try {
    //    client.users.get(users[i].id).send('test');
     //   console.log("Wysłałem do" + users[i].id);
        test(users[i].id);
     
    } catch (Ex)
      {
          console.log(Ex);
          console.log("nie moge wyslac" + users[i].id);
      } finally {
          console.log("finalizuje !!!!!!")  
      }

    }

   }

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