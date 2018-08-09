module.exports = member => {
  const guild = member.guild;
  guild.channels.get(guild.channels.find('name', 'powitanie_pożegnanie').id).send(`Użytkownik **${member.user.username}** dołączył do Świata Oodrona! Witaj w klubie! :smile:`);
};
