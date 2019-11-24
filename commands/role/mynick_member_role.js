const commando = require('discord.js-commando');

class UniqueMemberRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'uniquerole',
            group: 'role',
            memberName: 'uniquerole',
            description: 'Adds a unique role. Currently useless role.',
        });
    }

    async run(message, args)
    {
        message.member.guild.createRole(
        {
            name: message.member.user.username ,
            color: "0x6911A9" ,
            permissions: [] ,
        }).then(function(role)
            {
                message.member.addRole(role)
                message.reply('Role has been granted')
            });
    }
}

module.exports = UniqueMemberRoleCommand;



