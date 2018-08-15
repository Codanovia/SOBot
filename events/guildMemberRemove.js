module.exports = member => {
  const guild = member.guild;
  guild.channels.get(guild.channels.find('name', '📜powitanie_pożegnanie📜').id).send(`Użytkownik **${member.user.username}** opuścił Świat Oodrona. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `);
};
