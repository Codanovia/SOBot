const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const config = require('../config.json');
const warns = require('../warns.json');
const fs = require('fs');

exports.run = async (client, message, params) => {
  const guild = message.guild;
  const user = message.mentions.users.first();
  parseUser(message, user);
  if(!warns[user.id]) {
    warns[user.id] = {
      warns: 0
    };
  }
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

  let uWarns = warns[user.id].warns;
  warns[user.id] = {
    warns: uWarns + 1
  };

  if (uWarns === 2) {
    guild.member(user).removeRoles([guild.roles.find('name', config.modRoleName).id, guild.roles.find('name', config.modRoleName2).id, guild.roles.find('name', config.adminRoleName).id, guild.roles.find('name', config.adminRoleName2).id, guild.roles.find('name', config.adminRoleName3).id, guild.roles.find('name', config.adminRoleName4).id, guild.roles.find('name', config.adminRoleName5).id], 'otrzymanie dwóch ostrzeżeń w ciągu jednego tygodnia');
    guild.member(user).addRole([guild.roles.find('name', config.bannedRoleName.id)], 'otrzymanie dwóch ostrzeżeń w ciągu jednego tygodnia');
  }

  if (uWarns === 3) {
    reason = 'otrzymanie ośmiu ostrzeżeń w ciągu jednego tygodnia';
    user.send(`Zostałeś zbanowany na serwerze za ${reason}! Naprawdę, jak mogłeś zrobić tak okrutną rzecz?! :rage:`);
    guild.ban(user, 1, reason);
    const banEmbed = new RichEmbed()
    .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
    .setColor([255, 0, 0])
    .setTimestamp()
    .setDescription(`**Działanie:** Ban\n**Karany:** ${user}\n**Odpowiedzialny moderator:** Autoban\n**Powód:** ${reason}`)
    .setFooter(`Przypadek ${caseNum}`, "https://i.imgur.com/zNC67j6.png");
    return client.channels.get(modlog.id).send({banEmbed});
  }

  fs.writeFile('./warns.json', JSON.stringify(warns), (err) => {
    if (err) console.error(err)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ostrzeżenie'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Daje ostrzeżenie użytkownikowi naruszający regulamin Czaciora.',
  usage: 'warn [nazwa użytkownika] [powód]'
};
