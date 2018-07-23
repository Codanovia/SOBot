const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');

exports.run = async (client, message, params) => {
  const guild = message.guild;
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('nie mogę znaleźć kanału z ogłoszeniami.');
  if (message.mentions.users.size < 1) return message.reply('musisz napisać komu chcesz dać ostrzeżenie.').catch(console.error);
  message.reply(`pomyślnie wstawiono ostrzeżenie użytkownikowi ${user}`);

  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`Właśnie dostałeś ostrzeżenie za ${reason}! Nie jest ci przykro z tego powodu? :thinking:`)

  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([232, 44, 12])
  .setTimestamp()
  .setDescription(`**Działanie:** Ostrzeżenie\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ostrzeżenie'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Daje ostrzeżenie użytkownikowi naruszający regulamin Czaciora',
  usage: 'cz!warn (nazwa użytkownika) (powód)'
};

exports.moderation = {
  name: 'warn',
  description: 'Daje ostrzeżenie użytkownikowi naruszający regulamin Czaciora'
};
