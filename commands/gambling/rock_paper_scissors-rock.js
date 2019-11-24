const commando = require('discord.js-commando');

class RockCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rock',
            group: 'gambling',
            memberName: 'rock',
            description: 'Play rock, paper, scissors against highly skilled bot',
        });
    }

    async run(message, args)
    {        
        message.channel.sendMessage('Paper')
        message.reply('Lol, u lost');
    }
}

module.exports = RockCommand;