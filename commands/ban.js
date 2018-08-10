const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');

exports.run = async (client, message, params) => {
  let user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.channel.send('<:blobtickdeny:474749732317822986> Nie mogę znaleźć kanału z ogłoszeniami!');
  if (message.mentions.users.size < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać kogo chcesz zbanować!').catch(console.error);
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`:hammer: Zostałeś zbanowany na serwerze za ${reason}! Naprawdę, jak mogłeś zrobić tak okrutną rzecz?! :rage:`);
  message.guild.ban(user, 1, reason);
  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zbanowano użytkownika ${user}`);

  const embed = new RichEmbed()
  .setAuthor('Świat Oodrona - ostrzeżenia i bany', message.guild.iconURL)
  .setColor([255, 0, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Ban\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`, message.guild.iconURL);
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
  description: 'Banuje użytkownika naruszającego regulamin Świata Oodrona',
  usage: 'śo!ban (nazwa użytkownika) [powód]'
};
