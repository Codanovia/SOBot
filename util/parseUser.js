exports.parseUser = (message, user) => {
  const member = message.guild.member(user) || null;
  if (user.id === message.author.id) {
    return message.channel.send('Nie możesz zrobić tego działania na sobie!');
  } else if (member) {
    if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('Wyznaczony przez ciebie użytkownik ma wyższą rolę od ciebie lub tę samę rolę co ty!');
  }
  return user;
};
