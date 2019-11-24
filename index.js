const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDg2NTYwMTQ5Mjg5NDM1MTM2.DnA5Sg.s542A3rV2rNYZckBBsES0_zNlOE';

bot.registry.registerGroup('simple','Basic');
bot.registry.registerGroup('music','Music');
bot.registry.registerGroup('how','How..');
bot.registry.registerGroup('twoplayers','Multiplayer games');
bot.registry.registerGroup('role','Role');
bot.registry.registerGroup('gambling','Gambling');
bot.registry.registerGroup('team','Team - currently useless');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(TOKEN);

global.CurrentTeamMembers = [];
global.servers = {};

//duel game arrays
global.playersingame = 0;
global.duelplayers = [];
global.duelplayersscore = [];
global.duelrecord = 0;
global.duelrecordplayernick = "No games have been played yet";

bot.on('ready', function(){
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the server");
    let memberRole = member.guild.roles.find("name", "Peasant");
    member.addRole(memberRole);
});

bot.on('message', function(message){
    if(message.content == "Hello there")
    {
        message.reply("General Kenobi");
    }
});

bot.on('message', function(message){
    if(message.content == "lol")
    {
        message.reply("Lucifer our lord?");
    }
});

bot.on('message', function(message){
    if(message.content == "+play johny johny")
    {
        message.reply("yes papa?");
    }
});

// Despacito would be a better choice?
bot.on('message', function(message){
    if(message.content == "+play darkside")
    {
        message.reply("Despacito would be a better choice");
    }
});
bot.on('message', function(message){
    if(message.content == "+play budowa")
    {
        message.reply("Despacito would be a better choice");
    }
});
bot.on('message', function(message){
    if(message.content == "+play ignite")
    {
        message.reply("Despacito would be a better choice");
    }
});
bot.on('message', function(message){
    if(message.content == "+play mine diamonds")
    {
        message.reply("Yeah, it's nice, but.... Despacito would be a better choice");
    }
});
bot.on('message', function(message){
    if(message.content == "+play toto africa")
    {
        message.reply("nanananan...Africa...nanananan.....take me away from you....Still, despacito would be a better choice");
    }
});
bot.on('message', function(message){
    if(message.content == "+play chłopcze quaz")
    {
        message.reply("God of War is a great game...Despacito would be a better choice");
    }
});


//------------------------------------------


bot.on('message', function(message){
    if(message.content == "+play solo")
    {
        message.channel.sendMessage("No puedes eschuchar a esta basura.");
        message.channel.sendMessage("+skip 100000");
        message.channel.sendMessage("+play Despacito");
    }
});

bot.on('message', function(message){
    if(message.content == "+play despacito")
    {
        var despacito_blessing = Math.floor(Math.random() * 9)
        if (despacito_blessing == 0)
        {
            message.channel.sendMessage("Finally...");
        }
        else if (despacito_blessing == 1)
        {
            message.channel.sendMessage("At least one person/bot has an impecable music taste");
        }
        else if (despacito_blessing == 2)
        {
            message.channel.sendMessage("Who would even want to listen to Solo when we have Despacito?");
        }
        else if (despacito_blessing == 3)
        {
            message.channel.sendMessage("Muchas gracias");
        }
        else if (despacito_blessing == 4)
        {
            message.channel.sendMessage("There ia special place in heaven for people like you");
        }
        else if (despacito_blessing == 5)
        {
            message.channel.sendMessage("Skipping this song is punishable by death");
        }
        else if (despacito_blessing == 6)
        {
            message.channel.sendMessage("Beware of those who would skip this song for any other, for there is no God in their heart");
        }
        else if (despacito_blessing == 7)
        {
            message.channel.sendMessage("Despacito 2 will be soon...and it will be amazing");
        }
        else 
        {
            message.channel.sendMessage("There is no word to describe this beauty");
        }
    }
});

//Random response when "nice" shows up on the chat
bot.on('message', function(message){
    if(message.content == "nice")
    {
        var tower_number = Math.floor(Math.random() * 9)
        if (tower_number == 0)
        {
            message.channel.sendMessage("Bush did 9/11");
        }
        else if (tower_number == 1)
        {
            message.channel.sendMessage("9/11 was a punishment for gay marriages");
        }
        else if (tower_number == 2)
        {
            message.channel.sendMessage("Osama did nothing wrong");
        }
        else if (tower_number == 3)
        {
            message.channel.sendMessage("It was an inside job");
        }
        else if (tower_number == 4)
        {
            message.channel.sendMessage("So many people died during 9/11 and today's society is listening to Solo");
        }
        else if (tower_number == 5)
        {
            message.channel.sendMessage("Liking Solo is worse than fascism");
        }
        else if (tower_number == 6)
        {
            message.channel.sendMessage("Terrorist created Solo as a weapon controlling weak minds");
        }
        else if (tower_number == 7)
        {
            message.channel.sendMessage("Even Justin Bieber's songs are sometimes better than Solo");
        }
        else 
        {
            message.channel.sendMessage("One tower was not enough");
        }
    }
});

bot.on('message', function(message){
    if(message.content == "+skip")
    {
        message.channel.sendMessage("Remember! Skipping despacito is punishable by death!");
    }
});

bot.on('message', function(message){
    if(message.content == "xd")
    {
        message.channel.sendMessage("+play despacito");
    }
});