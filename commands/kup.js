const fs = require('fs');
const bRoles = require('../buyroles.json');
const coins = require('../coins.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

  let role = message.mentions.roles.first();
  const bRole1 = message.guild.roles.find('name', bRoles.bRole1.name);

  let sCoins = coins[message.author.id].coins;
  if (!role) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać jaką rolę chcesz kupić.');
  if (role === bRole1) {
    if (message.member.roles.has(bRole1.id)) return message.channel.send('<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!');
    message.guild.member(message.author).addRole(bRole1.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole1.name}**`);
  }
  else return message.channel.send('<:blobtickdeny:474749732317822986> Ta rola jest nie do kupienia.');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['buy'],
  permLevel: 1
};

exports.help = {
  name: "kup",
  description: "Kupuje rolę za posiadane gwiazdki",
  usage: "śo!kup (nazwa roli)"
};
