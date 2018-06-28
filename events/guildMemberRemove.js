module.exports = (member, client) => {
  const guild = member.guild;
  console.log(`Użytkownik ${member.user.username} opuścił serwer ${guild.name}`);
  client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik ${member.user} opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
