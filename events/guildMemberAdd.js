module.exports = member => {
  console.log(`Użytkownik ${member.user.username} dołączył do serwera ${member.guild.name}`);
  //client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik ${member.user} dołączył do Czaciora! Witaj w klubie! :smile:\nJeśli jesteś z Polski wpisz komendę **cz!pl** na kanale <#461193606233849857>.\nIf you live outside Poland type **cz!notpl** on channel <#461193606233849857>.`);
};
