const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  if (message.mentions.users.size < 1) return message.reply('musisz napisać kogo chcesz wyrzucić.').catch(console.error);
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`Zostałeś wyrzucony z serwera za ${reason}! Ale spokojnie, możesz wrócić na serwer w każdej w chwili klikając na ten link: https://discord.gg/XWCxeUZ :smiley:`);
  message.guild.member(user).kick();
  message.reply(`pomyślnie wyrzucono użytkownika ${user}`);

  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([232, 44, 12])
  .setTimestamp()
  .setDescription(`**Działanie:** Wyrzucenie z serwera\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['wyrzuć'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Wyrzuca użytkownika z Czaciora.',
  usage: 'kick [nazwa użytkownika] [powód]'
};
