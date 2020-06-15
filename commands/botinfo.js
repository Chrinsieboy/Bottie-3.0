const discord = require("discord.js");

module.exports.run = async(client, message, arguments) =>{

    // Embed wat we gaan laten tonen.
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Botinfo")
        .setDescription("Hier zie je de info van de bot")
        .setColor("#ff0000")
        .addField("Naam bot", client.user.username)
        .addField("Gemaakt op", client.user.createdAt)
        .addField("Gemaakt door", "Chrinsieboyyy#3976")
        .addField("ID:", client.user.id)

        .setThumbnail('https://www.chris.friemann.nl/discord/logo.png')
        .setTimestamp()
        .setFooter('© 2020 Bottie 3.0. Alle Rechten Voorbehouden.', 'https://www.chris.friemann.nl/discord/logo.png');

    // Terug sturen van het bericht
    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}