const Discord = require("discord.js");
// Beep Module
module.exports = {
    // Name of Command
    name: 'continue',
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
            const filter = (reaction, user) => {
                return (reaction.emoji.name === '☀️' || reaction.emoji.name === '☁️'|| reaction.emoji.name === '🌧️') && user.id === message.author.id;
            };

            sentMessage.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
                .then(collected => {
                    console.log('hi');
                    const reaction = collected.first();

                    if (reaction.emoji.name === '☀️') {
                        const embed = new Discord.MessageEmbed()
                        .setAuthor("Riley")
                        .setImage("https://media.giphy.com/media/l0MYJnJQ4EiYLxvQ4/giphy.gif")
                        .setDescription("That's great to hear!");
                        message.channel.send(embed);
                    } else if (reaction.emoji.name === '☁️') {
                        const embed = new Discord.MessageEmbed()
                        .setAuthor("Riley")
                        .setImage("https://media.giphy.com/media/6mm6ly3pO41B0TOrEX/giphy.gif")
                        .setDescription("Do you want to talk about it? Type in !yes or !no");
                        message.channel.send(embed);
                    } else {
                        const embed = new Discord.MessageEmbed()
                        .setAuthor("Riley")
                        .setImage("https://media.giphy.com/media/uY8WGNPtfxVySi9w8v/giphy.gif")
                        .setDescription("I'm just a bot but I'd be happy to listen. If you are in need of professional service please type !professional. If you'd like, type !contacts to receive your discord friends list. If not, please feel free to confide in me by typing in !dm :)");
                        message.channel.send(embed);
                    }
                })
                .catch(collected => {
                    message.reply('you did not react');
                });
        });
    }
}