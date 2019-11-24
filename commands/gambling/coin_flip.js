const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'gambling',
            memberName: 'flip',
            description: 'Flips a coin',
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2)
        message.channel.sendMessage("Your coin landed on:");
        if (chance == 0)
        {
            message.reply('Heads');
        }
        else
        {
            message.reply('Tails');
        }
    }
}

module.exports = CoinFlipCommand;