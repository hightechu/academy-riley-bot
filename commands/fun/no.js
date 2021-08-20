const Discord = require('discord.js');
const client = new Discord.Client();
// Ping Module
module.exports = {
    // Name of Command
    name: 'no',
    // Description of Command
    description: 'leads back to beginning',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
        message.channel.send("Okay, but if you do need me later come back and type !continue. Or if you'd like, type !contacts to receive a list of people that you might want to reach out to.");       
        }
};