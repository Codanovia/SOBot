exports.run = (client, message, params) => {
  const guild = message.guild;
  const notpl = guild.roles.find('name', 'Zagraniczny');
  if (message.member.roles.has(notpl.id)) return message.reply(`you already have this role!`);
  guild.member(message.author).addRole(notpl.id);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['zagraniczny', 'en'],
  permLevel: 1
};

exports.help = {
  name: "notpl",
  description: "Przypisuje użytkownikowi rolę Zagraniczny",
  usage: "cz!notpl"
};

exports.util = {
  name: "notpl",
  description: "Przypisuje użytkownikowi rolę Zagraniczny"
};
