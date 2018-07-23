module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Użytkownik ${member.user.username} opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
