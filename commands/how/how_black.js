const commando = require('discord.js-commando');

class HowBlackCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'howblack',
            group: 'how',
            memberName: 'howblack',
            description: 'Shows your true ancestry',
        });
    }

    async run(message, args)
    {
        var howgay = Math.floor(Math.random() * 100 ) + 1
        
            message.reply('You are ' +howgay + '% black!');

    }
}

module.exports = HowBlackCommand;