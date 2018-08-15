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
  const bRole3 = message.guild.roles.find('name', bRoles.bRole3.name);
  const bRole4 = message.guild.roles.find('name', bRoles.bRole4.name);
  const bRole5 = message.guild.roles.find('name', bRoles.bRole5.name);
  const bRole6 = message.guild.roles.find('name', bRoles.bRole6.name);
  const bRole7 = message.guild.roles.find('name', bRoles.bRole7.name);
  const bRole8 = message.guild.roles.find('name', bRoles.bRole8.name);
  const bRole9 = message.guild.roles.find('name', bRoles.bRole9.name);
  const bRole10 = message.guild.roles.find('name', bRoles.bRole10.name);
  const bRole11 = message.guild.roles.find('name', bRoles.bRole11.name);
  const bRole12 = message.guild.roles.find('name', bRoles.bRole12.name);
  const bRole13 = message.guild.roles.find('name', bRoles.bRole13.name);
  const bRole14 = message.guild.roles.find('name', bRoles.bRole14.name);
  const bRole15 = message.guild.roles.find('name', bRoles.bRole15.name);
  const bRole16 = message.guild.roles.find('name', bRoles.bRole16.name);

  let sCoins = coins[message.author.id].coins;
  if (!role) return message.channel.send('<:blobtickdeny:474749732317822986> Musisz napisać jaką rolę chcesz kupić.');

  if (role === bRole1) {
    if (message.member.roles.has(bRole1.id)) return message.channel.send('<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!');
    message.guild.member(message.author).addRole(bRole1.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole1.name}**`);
  }
  else if (role === bRole2) {
    if (message.member.roles.has(bRole2.id)) return message.channel.send('<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!');
    message.guild.member(message.author).addRole(bRole2.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole2.name}**`);
  }
  else if (role === bRole3) {
    let pCoins = coins[bRoles.bRole3.sellerID].coins;
    if (message.member.roles.has(bRole3.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole3.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole3.cost)
    };
    coins[bRoles.bRole3.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole3.cost)
    };
    message.guild.member(message.author).addRole(bRole3.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole3.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole4) {
    let pCoins = coins[bRoles.bRole4.sellerID].coins;
    if (message.member.roles.has(bRole4.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole4.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole4.cost)
    };
    coins[bRoles.bRole4.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole4.cost)
    };
    message.guild.member(message.author).addRole(bRole4.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole4.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole5) {
    let pCoins = coins[bRoles.bRole5.sellerID].coins;
    if (message.member.roles.has(bRole5.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole5.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole5.cost)
    };
    coins[bRoles.bRole5.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole5.cost)
    };
    message.guild.member(message.author).addRole(bRole5.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole5.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole6) {
    let pCoins = coins[bRoles.bRole6.sellerID].coins;
    if (message.member.roles.has(bRole6.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole6.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole6.cost)
    };
    coins[bRoles.bRole6.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole6.cost)
    };
    message.guild.member(message.author).addRole(bRole6.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole6.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole7) {
    let pCoins = coins[bRoles.bRole7.sellerID].coins;
    if (message.member.roles.has(bRole7.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole7.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole7.cost)
    };
    coins[bRoles.bRole7.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole7.cost)
    };
    message.guild.member(message.author).addRole(bRole7.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole7.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole8) {
    let pCoins = coins[bRoles.bRole8.sellerID].coins;
    if (message.member.roles.has(bRole8.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole8.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole8.cost)
    };
    coins[bRoles.bRole8.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole8.cost)
    };
    message.guild.member(message.author).addRole(bRole8.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole8.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole9) {
    let pCoins = coins[bRoles.bRole9.sellerID].coins;
    if (message.member.roles.has(bRole9.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole9.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole9.cost)
    };
    coins[bRoles.bRole9.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole9.cost)
    };
    message.guild.member(message.author).addRole(bRole9.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole9.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole10) {
    let pCoins = coins[bRoles.bRole10.sellerID].coins;
    if (message.member.roles.has(bRole10.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole10.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole10.cost)
    };
    coins[bRoles.bRole10.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole10.cost)
    };
    message.guild.member(message.author).addRole(bRole10.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole10.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole11) {
    let pCoins = coins[bRoles.bRole11.sellerID].coins;
    if (message.member.roles.has(bRole11.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole11.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole11.cost)
    };
    coins[bRoles.bRole11.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole11.cost)
    };
    message.guild.member(message.author).addRole(bRole11.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole11.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole12) {
    let pCoins = coins[bRoles.bRole12.sellerID].coins;
    if (message.member.roles.has(bRole12.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole12.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole12.cost)
    };
    coins[bRoles.bRole12.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole12.cost)
    };
    message.guild.member(message.author).addRole(bRole12.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole12.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole13) {
    let pCoins = coins[bRoles.bRole13.sellerID].coins;
    if (message.member.roles.has(bRole13.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole13.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole13.cost)
    };
    coins[bRoles.bRole13.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole13.cost)
    };
    message.guild.member(message.author).addRole(bRole13.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole13.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole14) {
    let pCoins = coins[bRoles.bRole14.sellerID].coins;
    if (message.member.roles.has(bRole14.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole14.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole14.cost)
    };
    coins[bRoles.bRole14.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole14.cost)
    };
    message.guild.member(message.author).addRole(bRole14.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole14.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole15) {
    let pCoins = coins[bRoles.bRole15.sellerID].coins;
    if (message.member.roles.has(bRole15.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole15.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole15.cost)
    };
    coins[bRoles.bRole15.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole15.cost)
    };
    message.guild.member(message.author).addRole(bRole15.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole15.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole16) {
    let pCoins = coins[bRoles.bRole16.sellerID].coins;
    if (message.member.roles.has(bRole16.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole16.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole16.cost)
    };
    coins[bRoles.bRole16.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole16.cost)
    };
    message.guild.member(message.author).addRole(bRole16.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole16.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole17) {
    let pCoins = coins[bRoles.bRole17.sellerID].coins;
    if (message.member.roles.has(bRole17.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole17.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole17.cost)
    };
    coins[bRoles.bRole17.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole17.cost)
    };
    message.guild.member(message.author).addRole(bRole17.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole17.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole18) {
    let pCoins = coins[bRoles.bRole18.sellerID].coins;
    if (message.member.roles.has(bRole18.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole18.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole18.cost)
    };
    coins[bRoles.bRole18.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole18.cost)
    };
    message.guild.member(message.author).addRole(bRole18.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole18.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole19) {
    let pCoins = coins[bRoles.bRole19.sellerID].coins;
    if (message.member.roles.has(bRole19.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole19.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole19.cost)
    };
    coins[bRoles.bRole19.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole19.cost)
    };
    message.guild.member(message.author).addRole(bRole19.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole19.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole20) {
    let pCoins = coins[bRoles.bRole20.sellerID].coins;
    if (message.member.roles.has(bRole20.id)) return message.channel.send(`<:blobtickdeny:474749732317822986> Już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole20.cost) return message.channel.send(`<:blobtickdeny:474749732317822986> Nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole20.cost)
    };
    coins[bRoles.bRole20.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole20.cost)
    };
    message.guild.member(message.author).addRole(bRole20.id);
    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie zakupiono rolę **${bRole20.name}**`);

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
