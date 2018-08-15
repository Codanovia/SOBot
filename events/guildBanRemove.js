const Discord = require('discord.js');
module.exports = (guild, user) => {
  guild.channels.get(guild.channels.find('name', '📜powitanie_pożegnanie📜').id).send(`Użytkownik **${user.username}** został odbanowany.`);
  const embed = new Discord.RichEmbed()
  .setAuthor('Świat Oodrona - ostrzeżenia i bany', guild.iconURL)
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user}\n**Odpowiedzialny moderator:** ${guild.client.unbanAuth}\n**Powód:** ${guild.client.unbanReason}`);
  guild.channels.get(guild.channels.find('name', '📜ogłoszenia📜').id).send({embed});
};
