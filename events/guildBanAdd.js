module.exports = (guild, user) => {
  guild.channels.get(guild.channels.find('name', '📜powitanie_pożegnanie📜').id).send(`Użytkownik **${user.username}** został zbanowany.`);
};
