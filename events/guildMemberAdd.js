module.exports = (member, client) => {
  console.log(`Użytkownik ${member.user.username} dołączył do serwera ${member.guild.name}`);
  client.channels.get('461223372785844247').send(`Użytkownik <@${member.user.id}> dołączył do Czaciora! Witaj w klubie! :smile:\nJeśli jesteś z Polski wpisz komendę **cz!pl** na kanale <#461193606233849857>.\nIf you live outside Poland type **cz!notpl** on channel <#461193606233849857>.`);
};
