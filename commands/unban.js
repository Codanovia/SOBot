const {RichEmbed} = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = params[0];
  const modlog = client.channels.find('name', 'ogłoszenia');
  if (!modlog) return message.reply('nie mogę znaleźć kanału z ogłoszeniami.');
  if (!user) return message.reply('musisz podać nazwę użytkownika którego chcesz odbanować.').catch(console.error);
  message.guild.unban(user);
  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user.tag}\n**Odpowiedzialny moderator:** ${guild.client.unbanAuth.tag}\n**Powód:** ${guild.client.unbanReason}`)
  .setFooter("https://i.imgur.com/zNC67j6.png");
  return guild.channels.get(modlog.id).send({embed});
  user.send('Mamy świetną nowinę! Właśnie cię odbanowano na najlepszym serwerze Czacior! Łap zaproszenie i się ciesz: https://discord.gg/Gew6cRE :smile:')
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['odbanuj'],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Odbanowuje zbanowanego użytkownika.',
  usage: 'unban [ID użytkownika]'
};
