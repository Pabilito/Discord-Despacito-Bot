const commando = require('discord.js-commando');
const discord  = require('discord.js');

class QuoteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'quote',
            group: 'simple',
            memberName: 'quote',
            description: 'Gives you some metaphorical(or not) quote',
        });
    }

    async run(message, args)
    {

        var answer = Math.floor(Math.random() * 10)
        if (answer == 0)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Books are the mirrors of the soul.","Virginia Woolf, Between the Acts")
        }
        else if (answer == 1)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Failure is the condiment that gives success its flavor.","Truman Capote");
        }
        else if (answer == 2)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("I'm oxygen and he's dying to breathe.","Tahereh Mafi, Shatter Me");
        }
        else if (answer == 3)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Life is a journey. Time is a river. The door is ajar","Jim Butcher, Dead Beat");
        }
        else if (answer == 4)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Into the darkness they go, the wise and the lovely.","Edna St. Vincent Millay");
        }
        else if (answer == 5)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Memories are bullets. Some whiz by and only spook you. Others tear you open and leave you in pieces.","Richard Kadrey, Kill the Dead");
        }
        else if (answer == 6)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("The nail that sticks out farthest gets hammered the hardest.","Patrick Jones, Nailed");
        }
        else if (answer == 7)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Happiness is the china shop; love is the bull.","H.L. Mencken");
        }
        else if (answer == 8)
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Man is born broken. He lives by mending. The grace of God is glue","Anne Lamott, Traveling Mercies: Some Thoughts on Faith");
        }
        else
        {
            var myinfo = new discord.RichEmbed()
            .setTitle("Quote for you:")
            .setColor(0xAA00DD)
            .setFooter("Solo is the worst song ever")
            .addField("Computers are like Old Testament gods; lots of rules and no mercy.","Joseph Campbell, The Power of Myth");
        }

        message.channel.sendEmbed(myinfo);
    }
}

module.exports = QuoteCommand;
