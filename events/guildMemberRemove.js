module.exports = (member, client) => {
  console.log(`Użytkownik ${member.user.username} opuścił serwer ${member.guild.name}`);
  client.channels.get('461223372785844247').send(`Użytkownik <@${member.user.id}> opuścił Czacior. Mamy nadzieję że kiedyś powrócisz do nas. :cry: `)
};
