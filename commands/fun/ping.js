const Discord = require('discord.js');
const client = new Discord.Client();
const user = interaction.options.getUser('target');
//const dev = await client.fetchUser(devID);
// Ping Module
module.exports = {
    // Name of Command
    name: 'sent',
    // Description of Command
    description: 'dm!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
            message.author.send("Hey ${user}! I am Riley, I'm here to provide resources to assist with your mental health needs and wants. Type in !continue to get started");
         
        }
};