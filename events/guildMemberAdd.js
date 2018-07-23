module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Użytkownik **${member.user.username}** dołączył do Czaciora! Witaj w klubie! :smile:\nJeśli jesteś z Polski wpisz komendę **cz!pl** na kanale <#461193606233849857>.\nIf you live outside Poland type **cz!notpl** on channel <#461193606233849857>.`);
};
