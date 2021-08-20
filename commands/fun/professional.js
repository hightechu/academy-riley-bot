const Discord = require('discord.js');
const client = new Discord.Client();
// Ping Module
module.exports = {
    // Name of Command
    name: 'professional',
    // Description of Command
    description: 'gives the user resources',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
        const embed = new Discord.MessageEmbed()
        .setAuthor("Riley")
        .addField("Online therapist:","https://www.betterhelp.com/")
        .addField("Mental health and substance abuse support:", "https://wellnesstogether.ca/en-CA" )
        .addField("Local Websites And Emergency Contact Numbers:", "https://checkpointorg.com/global/");
        message.channel.send(embed);         
        }
};