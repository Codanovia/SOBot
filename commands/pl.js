exports.run = (client, message, params) => {
  const guild = message.guild;
  const pl = guild.roles.find('name', 'Polski');
  if (message.member.roles.has(pl.id)) return message.reply(`już posiadasz tę rolę!`);
  guild.member(message.author).addRole(pl.id);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['polski'],
  permLevel: 1
};

exports.help = {
  name: "pl",
  description: "Przypisuje użytkownikowi rolę Polski.",
  usage: "pl"
};
