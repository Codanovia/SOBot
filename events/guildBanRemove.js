const {RichEmbed} = require('discord.js');
module.exports = (guild, user) => {
  console.log(`Użytkownik ${user.tag} został odbanowany.`);
  guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik **${user.tag}** został odbanowany.`);
};
