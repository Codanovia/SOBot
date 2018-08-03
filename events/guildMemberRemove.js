module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Użytkownik ${member.user.username} opuścił Świat Oodrona. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `);
};
