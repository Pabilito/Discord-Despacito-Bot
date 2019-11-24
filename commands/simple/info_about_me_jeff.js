const commando = require('discord.js-commando');
const discord  = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'jeff',
            group: 'simple',
            memberName: 'jeff',
            description: 'jeffffff',
        });
    }

    async run(message, args)
    {
        var myinfo = new discord.RichEmbed()

        .setTitle("From the XD archives")
        .addField("Case #69", "The only truth")
        .setDescription("My name is Jeff!")
        .setColor(0xFF0000)
        .setThumbnail(message.author.avatarURL)
        .setURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
        .setFooter("Solo is the worst song ever")

        message.channel.sendEmbed(myinfo);
    }
}

module.exports = InfoAboutMeCommand;

//Is embeded