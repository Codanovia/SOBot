module.exports = member => {
  console.log(`Użytkownik ${member.user.username} opuścił serwer ${member.guild.name}`);
  //client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik ${member.user} opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
