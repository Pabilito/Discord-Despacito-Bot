const commando = require('discord.js-commando');
const Discord = require('discord.js');

class PollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'poll',
            group: 'simple',
            memberName: 'poll',
            description: "Activates the poll",
        });
    }


    async run(message, args){

        //Role verification
      //  if(!message.member.roles.find(r=>r.name === "Pabilito")) return message.channel.send("This reqires the role: Dumny jak PAWeł");

        //PermisionVerification
      //  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This reqires the administraotr permission");

        //Checking if there is input
        if(!args[0]) return message.channel.send("Proper usage: !poll <question>");

        const embed = new Discord.RichEmbed()
        .setColor(0xaaff61)
        .setFooter("Please, vote! (One 'yes' and one 'no' answer are awarded automatically)")
        .setDescription(args)
        .setTitle('Poll crreated by '+ message.author.username)

        //Send message
        let msg = await message.channel.send(embed)

        //React to message
        await msg.react('😃')
        await msg.react('😡')

        message.delete({timeout:1000})
    } 
}

module.exports = PollCommand;