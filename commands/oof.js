const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js')

exports.run = async (client, message, params) => {
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  message.author.send('<:oof:474751352241651734> Oof! Jeśli chcesz się odrodzić, to tutaj masz zaproszenie: https://discord.gg/E36ZGZE :smiley:');
  message.guild.member(message.author).kick();
  const embed = new RichEmbed()
  .setAuthor('Świat Oodrona - ostrzeżenia i bany', message.guild.iconURL)
  .setColor([230, 45, 10])
  .setTimestamp()
  .setDescription(`**Działanie:** Wyrzucenie z serwera\n**Karany:** ${message.author}\n**Odpowiedzialny moderator:** Autokick\n**Powód:** Oof!`)
  .setFooter(`Przypadek ${caseNum}`, message.guild.iconURL);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "oof",
  description: "Wyrzuca autora wiadomości z serwera",
  usage: "śo!oof"
};
