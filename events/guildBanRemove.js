module.exports = (guild, user) => {
  console.log(`Użytkownik ${user.username} został odbanowany.`);
  guild.channels.get('461223372785844247').send(`Użytkownik **${user.username}** został odbanowany.`);
};
