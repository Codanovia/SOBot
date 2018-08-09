const {RichEmbed} = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);
  const modlog = client.channels.find('name', 'ogłoszenia');
  if (!modlog) return message.channel.send('<:blobtickdeny:474749732317822986> Nie mogę znaleźć kanału z ogłoszeniami!');
  if (message.mentions.users.size < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać kogo chcesz odbanować!').catch(console.error);
  message.guild.unban(user);
  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie odbanowano użytkownika ${user}`);
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
  usage: 'śo!unban (nazwa użytkownika) [powód]'
};
