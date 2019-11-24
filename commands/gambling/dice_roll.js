const commando = require('discord.js-commando');

class RollDiceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'gambling',
            memberName: 'roll',
            description: 'Rolls a six sided dice',
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1
        message.reply('Your dice landed on ' + diceRoll);
    }
}

module.exports = RollDiceCommand;