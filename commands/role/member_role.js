const commando = require('discord.js-commando');

class MemberRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'role',
            group: 'role',
            memberName: 'role',
            description: 'Adds a peasant role',
        });
    }

    async run(message, args)
    {
        message.member.send("Welcome to the server, Peasant");
        let memberRole = message.member.guild.roles.find("name", "Peasant");
        message.member.addRole(memberRole);
    }
}

module.exports = MemberRoleCommand;



