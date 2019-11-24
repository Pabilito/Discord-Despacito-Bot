const commando = require('discord.js-commando');

class ScissorsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'scissors',
            group: 'gambling',
            memberName: 'scissors',
            description: 'Play rock, paper, scissors against highly skilled bot',
        });
    }

    async run(message, args)
    {        
        message.channel.sendMessage('Rock')
        message.reply('Lol, u lost');
    }
}

module.exports = ScissorsCommand;