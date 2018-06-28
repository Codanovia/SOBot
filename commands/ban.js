const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  if (message.mentions.users.size < 1) return message.reply('musisz napisać kogo chcesz zbanować.').catch(console.error);
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`Zostałeś zbanowany na serwerze za ${reason}! Naprawdę, jak mogłeś zrobić tak okrutną rzecz?! :rage:`)
  message.guild.ban(user, 2);
  message.reply(`pomyślnie zbanowano użytkownika ${user}`);

  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([255, 0, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Ban\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['zbanuj'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Banuje użytkownika naruszającego regulamin Czaciora.',
  usage: 'ban [nazwa użytkownika] [powód]'
};
