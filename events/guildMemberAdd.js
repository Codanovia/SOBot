module.exports = (member) => {
  const guild = member.guild;
  console.log(`Użytkownik ${member.user.username} dołączył do serwera ${member.guild.name}`);
  guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik <@${member.user.id}> dołączył do Czaciora! Witaj w klubie! :smile:\nJeśli jesteś z Polski wpisz komendę **cz!pl** na kanale <#386438045899030528>.\nIf you live outside Poland type **cz!notpl** on channel <#386438045899030528>.`);
};
