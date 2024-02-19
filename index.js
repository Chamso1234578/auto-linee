
const express = require('express')
const app = express();
const port = 3000
app.get('/',(req, res) => res.send('ready'))

app.listen(port,() =>
console.log('ready')
); 

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES
  ]
});




client.on("ready", ()=> {
 client.user.setActivity("Awamᵀᴹ")
  console.log(`Logged in ${client.user.tag}`)
})


client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208185280369004604')// تحديثات ايدي رومِ
    {
      
    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208186293755056159')//ايدي رومِ اسعار جواهر
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208185855542296687')//ايدي رومِ اسعار كريدت
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})


client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208347884546957312')//ايدي رومِ دليل شحن
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208185435940192276')//ايدي رومِ دليل تسليم
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208185936807067677')//ايدي رومِ منتجات  
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208865635195559976')//ايدي رومِ نصابين  
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208186026074570782')//ايدي رومِ ارائكم  
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
   if(ilyass.channel.id === '1208185156159152160')//ايدي رومِ البداية  
    {

    ilyass.channel.send('https://e.top4top.io/p_2971i3qwo1.png')//رابط خط
    }
})

client.login(process.env.token);
