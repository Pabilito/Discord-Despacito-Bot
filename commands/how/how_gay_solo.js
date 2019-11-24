const commando = require('discord.js-commando');

class HowGaySoloCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'howgaysolo',
            group: 'how',
            memberName: 'howgaysolo',
            description: 'Shows the truth about the song Solo',
        });
    }

    async run(message, args)
    {
        var howgay = Math.floor(Math.random() * 100 ) + 100
        
            message.reply('Solo is ' +howgay + '% gay!');

    }
}

module.exports = HowGaySoloCommand;