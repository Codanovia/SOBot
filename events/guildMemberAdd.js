module.exports = (member, client) => {
  console.log(`Użytkownik ${member.user.username} dołączył do serwera ${member.guild.name}`);
  client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik <@${member.user.id}> dołączył do Czaciora! Witaj w klubie! :smile:\nJeśli jesteś z Polski wpisz komendę **cz!pl** na kanale #boty.\nIf you live outside Poland type **cz!notpl** on channel #boty.`);
};
