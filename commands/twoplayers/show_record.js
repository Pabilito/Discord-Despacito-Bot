const commando = require('discord.js-commando');
const discord  = require('discord.js');

class RecordCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'record',
            group: 'twoplayers',
            memberName: 'record',
            description: 'Shows the highest result in holy duel since last update',
        });
    }

    async run(message, args)
    {
        var record = global.duelrecord;

        if (record == 0){
            const results = new discord.RichEmbed()
                .setColor(0x4a5fe1)
                .setFooter('Duel is like despacito - it is a sense of life')
                .setDescription(global.duelrecordplayernick+". Write '!duel 1' to play.")
                .setTitle('The holy duel record')

                let msg = await message.channel.sendEmbed(results);
        }
        else{
        const results = new discord.RichEmbed()
                .setColor(0x4a5fe1)
                .setFooter('Duel is like despacito - it is a sense of life')
                .setDescription('Record is '+global.duelrecord+' points scored by '+global.duelrecordplayernick+'.')
                .setTitle('The holy duel record')

                let msg = await message.channel.sendEmbed(results);

                await msg.react('🥑')
        }
    }
}

module.exports = RecordCommand;