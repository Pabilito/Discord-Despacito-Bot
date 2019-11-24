const commando = require('discord.js-commando');

class HowGayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'howgay',
            group: 'how',
            memberName: 'howgay',
            description: 'Shows your true nature',
        });
    }

    async run(message, args)
    {
        var howgay = Math.floor(Math.random() * 100 ) + 1
        
            message.reply('You are ' +howgay + '% gay!');

    }
}

module.exports = HowGayCommand;