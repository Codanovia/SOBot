const {RichEmbed} = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  const user = params[0];
  const modlog = '423572352199163906';
  if (!user) return message.reply('musisz podać nazwę użytkownika którego chcesz odbanować.').catch(console.error);
  message.guild.unban(user);
  user.send('Mamy świetną nowinę! Właśnie cię odbanowano na najlepszym serwerze Czacior! Łap zaproszenie i się ciesz: https://discord.gg/Gew6cRE :smile:');
  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user.tag}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter("https://i.imgur.com/zNC67j6.png");
  return guild.channels.get(modlog).send({embed});
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['odbanuj'],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Odbanowuje zbanowanego użytkownika.',
  usage: 'unban [ID użytkownika]'
};
