const commando = require('discord.js-commando');

class MomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mom',
            group: 'simple',
            memberName: 'mom',
            description: "Sends greeting to Steve's mum",
        });
    }

    async run(message, args)
    {
        var option = Math.floor(Math.random() * 100 ) 

        if(option < 95)
        {
            message.channel.sendMessage('Pozdrwiam mamę steviego :princess: ');
        }
        else 
        {
            message.channel.sendMessage('¡Saludos a la madre del Stevie!');
        }
    }
}

module.exports = MomCommand;