const commando = require('discord.js-commando');

class RouletteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roulette',
            group: 'gambling',
            memberName: 'roulette',
            description: 'Pick a sum of money from 1 to 9 and number from 0 to 9 - !roulette <money> <number you are betting on>',
        });
    }

    async run(message, args)
    {
        if((args[2]>=0) && (args[2]<=50))
        {
            var money = args[0]
            if((money>=1) && (money<=100))
            {

                var chance = Math.floor(Math.random() * 10)
                message.reply('Money bet: '+money+'. Your number: '+args[2]+'.');
                message.reply('The winning number is '+chance);

                if(chance == args[2])  
                {
                    message.channel.sendMessage('You have won a despacito and '+money*5+' coins.')
                    message.channel.sendMessage('+play despacito')
                }  
                else
                {
                    if(money>1)
                    {
                        message.channel.sendMessage('What a loser! You have lost '+money+' coins!')
                    }
                    else
                    {
                        message.channel.sendMessage('What a loser! You have lost 1 coin!')    
                    }
                }
            }
            else
            {
                message.channel.sendMessage('You have bet too few or too many coins')
            }
        }
        else
        {
            message.channel.sendMessage('Wrong form or number is out of range. Correct format is: !roulette <amount of money you bet> <number you are betting on>')
        }
    }
}

module.exports = RouletteCommand;