const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js')

exports.run = async (client, message, params) => {
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  message.guild.ban(message.author);
  message.guild.unban(message.author);
  message.author.send('Oof! Jeśli chcesz się odrodzić, to tutaj masz zaproszenie: https://discord.gg/XWCxeUZ :smiley:');
  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([232, 44, 12])
  .setTimestamp()
  .setDescription(`**Działanie:** Wyrzucenie z serwera\n**Karany:** ${message.author}\n**Odpowiedzialny moderator:** Autokick\n**Powód:** Oof!`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "oof",
  description: "Wyrzuca użytkownika piszącego tę komendę",
  usage: "oof"
};
