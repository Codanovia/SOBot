exports.run = (client, message, params = []) => {
  const guild = message.guild;
  guild.member(message.author).addRole('396704315898724353');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['polski'],
  permLevel: 0
};

exports.help = {
  name: "pl",
  description: "Przypisuje nowo-przybyłego użytkownikowi rolę Polski.",
  usage: "pl"
};
