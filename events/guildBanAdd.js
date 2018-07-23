module.exports = (guild, user) => {
  guild.defaultChannel.send(`Użytkownik **${user.username}** został zbanowany.`);
};
