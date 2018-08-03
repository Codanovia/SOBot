module.exports = (guild, user) => {
  guild.defaultChannel.send(`Użytkownik **${user}** został zbanowany.`);
};
