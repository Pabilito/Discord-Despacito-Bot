const commando = require('discord.js-commando');

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'Gives you advice in for similiar to yes/no',
        });
    }

    async run(message, args)
    {
        var answer = Math.floor(Math.random() * 10)
        if (answer == 0)
        {
            message.reply('Definitely yes');
        }
        else if (answer == 1)
        {
            message.reply("It's not a good idea");
        }
        else if (answer == 2)
        {
            message.reply("Rather not");
        }
        else if (answer == 3)
        {
            message.reply("Absolutely not");
        }
        else if (answer == 4)
        {
            message.reply("Go for it");
        }
        else if (answer == 5)
        {
            message.reply("Wait for more favourable circumastances");
        }
        else if (answer == 6)
        {
            message.reply("It's the best thing you can do right now");
        }
        else if (answer == 7)
        {
            message.reply("I would not recommend it");
        }
        else if (answer == 8)
        {
            message.reply("Don't ask me for opinion. I am just a bot");
        }
        else
        {
            message.reply('You had better listened to Despacito instead of asking so dumb questions');
        }
    }
}

module.exports = EightBallCommand;