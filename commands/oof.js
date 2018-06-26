const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js')

exports.run = async (client, message, params) => {
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  const embed = new RichEmbed()
  message.author.send('Oof!');
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([255, 0, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Ban\n**Karany:** ${message.author}\n**Odpowiedzialny moderator:** Autoban\n**Powód:** Oof!`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
  message.guild.ban(message.author);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oof",
  description: "Banuje użytkownika piszącego tę komendę",
  usage: "oof"
};
