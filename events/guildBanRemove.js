const Discord = require('discord.js');
module.exports = (guild, user) => {
  guild.defaultChannel.send(`Użytkownik **${user.username}** został odbanowany.`);
  const embed = new Discord.RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user.tag}\n**Odpowiedzialny moderator:** ${guild.client.unbanAuth.tag}\n**Powód:** ${guild.client.unbanReason}`);
  guild.channels.get(guild.channels.find('name', 'ogłoszenia').id).send({embed});
};
