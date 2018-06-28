module.exports = member => {
  console.log(`Użytkownik ${member.user.username} opuścił serwer ${member.guild.name}`);
  client.channels.get('461223372785844247').send(`Użytkownik ${member.user} opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
