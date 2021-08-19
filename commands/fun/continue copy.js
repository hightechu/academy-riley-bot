const Discord = require("discord.js");
// Beep Module
module.exports = {
    // Name of Command
    name: 'continue2',
    // Description of Command
    description: 'asks how you are feeling today!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
       
        // Send Message
        message.channel.send('How are you feeling today? Please select a weather reaction:').then(sentMessage => {
            // Add Reaction
            sentMessage.react('☀️');
            sentMessage.react('☁️');
            sentMessage.react('🌧️'); 
        }).then(sentMessage=> {
             
            const filter = (reaction, user) => {
                return reaction.emoji.name === '☀️';
            };
            
            const collector = sentMessage.createReactionCollector({ filter, time: 15000 });
            
            collector.on('collect', (reaction, user) => {
                console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            });
            
            collector.on('end', collected => {
                console.log(`Collected ${collected.size} items`);
            });
            });
        }    
}