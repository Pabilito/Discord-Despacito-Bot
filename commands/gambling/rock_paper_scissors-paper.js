const commando = require('discord.js-commando');

class PaperCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'paper',
            group: 'gambling',
            memberName: 'paper',
            description: 'Play rock, paper, scissors against highly skilled bot',
        });
    }

    async run(message, args)
    {        
        message.channel.sendMessage('Scissors')
        message.reply('Lol, u lost');
    }
}

module.exports = PaperCommand;