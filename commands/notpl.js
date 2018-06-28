exports.run = (client, message, params = []) => {
  const guild = message.guild;
  guild.member(message.author).addRole('396704429010845716');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['zagraniczny', 'en'],
  permLevel: 1
};

exports.help = {
  name: "notpl",
  description: "Przypisuje nowo-przybyłego użytkownikowi rolę Zagraniczny.",
  usage: "notpl"
};
