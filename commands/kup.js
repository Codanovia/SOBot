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
  const bRole2 = message.guild.roles.find('name', bRoles.bRole2.name);

  let sCoins = coins[message.author.id].coins;
  if (!role) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać jaką rolę chcesz kupić.');

  if (role === bRole1) {
    if (message.member.roles.has(bRole1.id)) return message.channel.send('<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!');
    message.guild.member(message.author).addRole(bRole1.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole1.name}**`);
  }
  else if (role === bRole2) {
    let pCoins = coins[bRoles.bRole2.sellerID].coins;
    if (message.member.roles.has(bRole2.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole2.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole2.cost)
    };
    coins[bRoles.bRole2.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole2.cost)
    };
    message.guild.member(message.author).addRole(bRole2.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole2.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
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
