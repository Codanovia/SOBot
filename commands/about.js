const {RichEmbed} = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new RichEmbed()
  .setColor([255, 255, 0])
  .setAuthor('Informacje o bocie', message.guild.iconURL)
  .setDescription(`**Twórca bota:** <@158584302785921025>\n**Współpracownicy bota:** <@277192632181194753>, <@161820881704845312>\n**Wersja bota:** 2.0.4\n**Repozytorium git:** https://github.com/Codanovia/SOBot`);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['obocie'],
  permLevel: 1
};

exports.help = {
  name: "about",
  description: "Pokazuje infomacje o tym bocie",
  usage: "śo!about"
};
