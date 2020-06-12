const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(process.env.Token);


client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
    
    client.user.setActivity(`met Ricks zijn kont`, { type: "PLAYING" });
 
});
   
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
   
    }
    
});

// !avatar - Laat de profielfoto van een gebruiker zien.
// !botinfo - Laat alle informatie over de bot zien.
// !history - Laat je geschiedenis zien.
// !kerst - Laat zien hoelang het duurt totdat het kerst is.
// !leden - Geeft weer hoeveel leden er in de Discord server zitten.
// !ping - Laat de responstijd zien.
// !reclame - Laat zien tot wanneer je reclame cooldown duurt.
// !serverinfo - Laat alle info over de server zien.
// !whois - Laat alle informatie van een gebruiker zien.

// Informatie
// !doneer - Geeft informatie over het doneren.
// !help - Geeft informatie over de commands.
// !info - Alle linkjes van Jens.
// !youtube - Geeft info over Jens zijn kanaal.

// Minigames
// !dobbel - Gooi een dobbelsteen.
// !kopofmunt - Speel kop of munt tegen de bot.
// !rps - Speel steen, papier schaar tegen de bot.

// Muziek
// !play - Speel muziek af.
// !playing - Laat het nummer zien dat wordt afgespeeld.
// !queue - Laat de wachtrij voor nummers zien.
// !search - Zoek naar een nummer op YouTube.
// !skip - Vote om een nummer over te slaan.