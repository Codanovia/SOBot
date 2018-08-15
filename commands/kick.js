const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');

exports.run = async (client, message, params) => {
  let user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', '📜ogłoszenia📜');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.channel.send('<:blobtickdeny:474749732317822986> Nie mogę znaleźć kanału z ogłoszeniami!')
  if (message.mentions.users.size < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać kogo chcesz wyrzucić!').catch(console.error);
  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`:boot: Zostałeś wyrzucony z serwera za ${reason}! Ale spokojnie, możesz wrócić na serwer w każdej w chwili klikając na ten link: https://discord.gg/E36ZGZE :smiley:`);
  message.guild.member(user).kick(reason);
  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie wyrzucono użytkownika ${user}`);

  const embed = new RichEmbed()
  .setAuthor('Świat Oodrona - ostrzeżenia i bany', 'https://cdn.discordapp.com/attachments/467629030124814339/474718837389131777/swiat_oodrona.png')
  .setColor([230, 45, 10])
  .setTimestamp()
  .setDescription(`**Działanie:** Wyrzucenie z serwera\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`);
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
  description: 'Wyrzuca użytkownika ze Świata Oodrona',
  usage: 'śo!kick (nazwa użytkownika) [powód]'
};
