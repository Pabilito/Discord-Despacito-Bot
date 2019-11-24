const commando = require('discord.js-commando');

class JoinTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'jointeam',
            group: 'team',
            memberName: 'jointeam',
            description: 'Allows you to join the team',
        });
    }

    async run(message, args)
    {
        CurrentTeamMembers.push(message.author)
        message.reply("Succesfully joined")
    }
}

module.exports = JoinTeamCommand;