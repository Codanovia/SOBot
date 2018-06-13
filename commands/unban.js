const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('nie mogę znaleźć kanału z ogłoszeniami.');
  const reason = params.splice(1, params.length).join(' ') || `Oczekuję wkładu moderatora. Użyj ${config.prefix}reason ${caseNum} <powód>.`;
  if (message.mentions.users.size < 1) return message.reply('musisz napisać kogo chcesz odbanować.').catch(console.error);
  message.guild.unban(user);

  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Odbanowuje zbanowanego użytkownika.',
  usage: 'unban [ID użytkownika]'
};
