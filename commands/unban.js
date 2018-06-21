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
