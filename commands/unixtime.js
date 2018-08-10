const {RichEmbed} = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new RichEmbed()
  .setColor([255, 255, 0])
  .addField(':clock12: Czas uniksowy', `Od 1 stycznia 1970 roku, godziny 01:00\nczasu polskiego minęło **${message.createdTimestamp}** milisekund`);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['czasuniksowy'],
  permLevel: 1
};

exports.help = {
  name: "unixtime",
  description: "Pokazuje sekundy jakie minęły od początku ery uniksowej (1 stycznia 1970, godzina 1:00 czasu polskiego)",
  usage: "śo!unixtime"
};
