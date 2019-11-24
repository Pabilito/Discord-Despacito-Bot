const commando = require('discord.js-commando');

class ShowMyAvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Shows your avatar',
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL) 
    }
}

module.exports = ShowMyAvatarCommand;