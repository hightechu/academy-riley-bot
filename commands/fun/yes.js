const Discord = require('discord.js');
const client = new Discord.Client();
// Ping Module
module.exports = {
    // Name of Command
    name: 'yes',
    // Description of Command
    description: 'gives the user option to talk',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
        const embed = new Discord.MessageEmbed()
        .setAuthor("Riley")
        .setImage("https://media.giphy.com/media/uY8WGNPtfxVySi9w8v/giphy.gif")
        .setDescription("I'm just a bot but I'd be happy to listen. If you are in need of professional service please type !professional. If you'd like, type !contacts to receive your discord friends list. If not, please feel free to confide in me by typing in !dm :)");
        message.channel.send(embed);         
        }
};