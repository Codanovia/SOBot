const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');

exports.run = async (client, message, params) => {
  const guild = message.guild;
  let user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', '📜ogłoszenia📜');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.channel.send('<:blobtickdeny:474749732317822986> Nie mogę znaleźć kanału z ogłoszeniami!');
  if (message.mentions.users.size < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać komu chcesz dać ostrzeżenie!').catch(console.error);
  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie wstawiono ostrzeżenie użytkownikowi ${user}`);

  const reason = params.splice(1, params.length).join(' ') || 'brak';
  user.send(`<:bloberror:474751915918360607> Właśnie dostałeś ostrzeżenie za ${reason}! Nie jest ci przykro z tego powodu? :thinking: Następnym razem przeczytaj uważnie <#444193664961347615>, żebyś znowu nie złamał jakiejś zasady! :smiley:`);

  const embed = new RichEmbed()
  .setAuthor('Świat Oodrona - ostrzeżenia i bany', message.guild.iconURL)
  .setColor([230, 45, 10])
  .setTimestamp()
  .setDescription(`**Działanie:** Ostrzeżenie\n**Karany:** ${user}\n**Odpowiedzialny moderator:** ${message.author}\n**Powód:** ${reason}`)
  .setFooter(`Przypadek ${caseNum}`);
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
  description: 'Daje ostrzeżenie użytkownikowi naruszający regulamin Świata Oodrona',
  usage: 'śo!warn (nazwa użytkownika) [powód]'
};
