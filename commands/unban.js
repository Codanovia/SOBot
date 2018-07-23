const {RichEmbed} = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const reason = params.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = params[0];
  const modlog = client.channels.find('name', 'ogłoszenia')
  if (reason.length < 1) return message.reply('musisz podać powód odbanowania użytkownika')
  if (!user) return message.reply('musisz podać nazwę użytkownika którego chcesz odbanować.').catch(console.error);
  message.guild.unban(user);
  message.reply(`pomyślnie odbanowano użytkownika ${user}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['odbanuj'],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Odbanowuje zbanowanego użytkownika',
  usage: 'cz!unban (nazwa użytkownika) (powód)'
};

exports.moderation = {
  name: 'unban',
  description: 'Odbanowuje zbanowanego użytkownika'
};
