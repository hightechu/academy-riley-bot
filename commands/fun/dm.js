const Discord = require('discord.js');
const client = new Discord.Client();
// Ping Module
module.exports = {
    // Name of Command
    name: 'hi',
    // Description of Command
    description: 'hi!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
            message.channel.send("Hey " +message.author.username+" I'm Riley! I'm here to provide resources to assist with your mental health needs and wants. Type in !continue to get started");
         
        }
};