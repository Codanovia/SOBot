exports.run = (client, message, params = []) => {
  guild.member(message.author).addRole('396704429010845716');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['zagraniczny'],
  permLevel: 0
};

exports.help = {
  name: "notpl",
  description: "Przypisuje nowo-przybyłego użytkownikowi rolę Zagraniczny.",
  usage: "notpl"
};
