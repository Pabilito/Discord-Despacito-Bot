const commando = require('discord.js-commando');

class HowGayDespacitoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'howgaydespacito',
            group: 'how',
            memberName: 'howgaydespacito',
            description: 'Shows the truth about the greatest song of all times - Despacito',
        });
    }

    async run(message, args)
    {
        var howgay = Math.floor(Math.random() * 7 ) 
        message.reply('Despacito is ' +howgay + '% gay!');
    }
}

module.exports = HowGayDespacitoCommand;