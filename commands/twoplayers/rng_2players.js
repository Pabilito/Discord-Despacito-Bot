const commando = require('discord.js-commando');
const discord  = require('discord.js');

class RNGCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'duel',
            group: 'twoplayers',
            memberName: 'duel',
            description: 'Luck based duel between two players. The initial player has to write "!duel 1" and the second one only "!duel"',
        });
    }

    async run(message, args)
    {
            var nick = message.author.username;
            var number = Math.floor(Math.random() * 99 ) + 2

            if(number > global.duelrecord)
            {
                global.duelrecord = number;
                global.duelrecordplayernick = message.author.username;
            }

            if(args[0] == 1)
            {
                const result = new discord.RichEmbed()
                .setColor(0xaaff61)
                .setFooter('Who will challenge '+nick+'? Please write "!duel" to join the battle')
                .setDescription(nick+' has scored '+number+' points!')
                .setTitle('The holy duel')
                
                global.duelplayers[0] = message.author.username;
                global.duelplayersscore[0] = number;

                //message.channel.sendMessage(nick+' has scored '+number+' points!');
                //message.channel.sendMessage('Who will challenge '+nick+'?' );
                global.playersingame = 1;

                message.channel.sendEmbed(result);
            }
            else
            {
                const results = new discord.RichEmbed()
                .setColor(0xa122f1)
                .setFooter('#StopSolo')
                .setDescription(nick+' has scored '+number+' points!')
                .setTitle('The holy duel')
                message.channel.sendEmbed(results);

                //message.channel.sendMessage(nick+' has scored '+number+' points!');
                if(number>global.duelplayersscore[0])
                {
                    const results = new discord.RichEmbed()
                    .setColor(0x421f31)
                    .setDescription(nick+' is a winner!')
                    .setTitle('The holy duel results')
                    let msg = await message.channel.sendEmbed(results);

                    await msg.react('🏅')
                    //message.channel.sendMessage(nick+' is a winner!');
                }
                else if(global.duelplayersscore[0]>number)
                {
                    const results = new discord.RichEmbed()
                    .setColor(0x22efc1)
                    .setDescription(global.duelplayers[0]+' has won!')
                    .setTitle('The holy duel results')
                    let msg = await message.channel.sendEmbed(results);

                    await msg.react('🏅')
                    //message.channel.sendMessage(global.duelplayers[0]+' has won!');
                }
                else
                {
                    const results = new discord.RichEmbed()
                    .setColor(0xa21f81)
                    .setDescription('Seems like a draw to me or you have messed up something or there was an update. Remember, first player has to write "!duel 1"')
                    .setTitle('The holy duel results')
                    message.channel.sendEmbed(results);
                    //message.channel.sendMessage('Seems like a draw to me or you have messed up something. Remember, first player has to write "!duel 1"');
                }
                global.duelplayersscore = [];
                global.duelplayers = [];
            }
    }
}

module.exports = RNGCommand;