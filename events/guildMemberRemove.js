module.exports = (member) => {
  const guild = member.guild;
  console.log(`Użytkownik ${member.user.username} opuścił serwer ${member.guild.name}`);
  guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik <@${member.user.id}> opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
