const Discord = require('discord.js');
const client = new Discord.Client();
// Ping Module
module.exports = {
    // Name of Command
    name: 'dm',
    // Description of Command
    description: 'dms the user',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
            message.author.send("Hey " +message.author.username+", welcome to your DMs. Feel free to talk about whatever you need to, and although I'm just a bot I'm here to listen 😊 It is very possible that through talking to me and maybe reading over your messages, you might find a solution or some clarity to what it is that's bothering you.");
         
        }
};