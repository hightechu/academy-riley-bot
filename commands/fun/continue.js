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
        }).then(() => {
        
            message.awaitReactions({ max: 1, time: 600000, errors: ['time'] })
                .then(collected => {
                    console.log('hi');
                    const reaction = collected.first();
                    
                    if (reaction.emoji.name === '☀️') {
                        message.channel.send('You reacted with a sun.');
                    } else if (reaction.emoji.name === '☁️') {
                        message.channel.send('You reacted with a cloud.');
                } else {
                        message.reply('You reacted with a rain cloud.');
                    }
                })
                .catch(collected => {
                    message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
                });
            }),
        })    
}