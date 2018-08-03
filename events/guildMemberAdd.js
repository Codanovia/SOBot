module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Użytkownik **${member.user.username}** dołączył do Świata Oodrona! Witaj w klubie! :smile:`);
};
