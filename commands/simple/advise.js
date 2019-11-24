const commando = require('discord.js-commando');

class AdviseCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'whattodo',
            group: 'simple',
            memberName: 'whattodo',
            description: 'Gives you some advice',
        });
    }

    async run(message, args)
    {
        var answer = Math.floor(Math.random() * 4)
        if (answer == 0)
        {
            message.reply('Eat a watermelon');
        }
        else if (answer == 1)
        {
            message.reply("Eat some cheese");
        }
        else if (answer == 2)
        {
            message.reply("A watermelon a day keeps Paweł close to you");
        }
        else
        {
            message.reply('You should listen to Despacito');
        }
    }
}

module.exports = AdviseCommand;