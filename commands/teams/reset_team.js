const commando = require('discord.js-commando');

class ResetTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'resetteam',
            group: 'team',
            memberName: 'resetteam',
            description: 'Resets all teams. Prepares to create new ones.',
        });
    }

    async run(message, args)
    {
        CurrentTeamMembers = []
        message.reply("The current team has been reset")
    }
}

module.exports = ResetTeamCommand;