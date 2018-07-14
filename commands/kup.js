const fs = require('fs');
const bRoles = require('../buyroles.json');
const coins = require('../coins.json');
const config = require('../config.json');
const diamonds = require('../diamonds.json');

exports.run = async (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
      diamonds: 0
    };
  }

  if (message.author.id === config.ownerID) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

  let role = message.mentions.roles.first() || params.join(' ');
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
  const bRole17 = message.guild.roles.find('name', bRoles.bRole17.name);
  const bRole18 = message.guild.roles.find('name', bRoles.bRole18.name);
  const bRole19 = message.guild.roles.find('name', bRoles.bRole19.name);
  const bRole20 = message.guild.roles.find('name', bRoles.bRole20.name);
  const bRole21 = message.guild.roles.find('name', bRoles.bRole21.name);
  const bRole22 = message.guild.roles.find('name', bRoles.bRole22.name);
  const bRole23 = message.guild.roles.find('name', bRoles.bRole23.name);
  const bRole24 = message.guild.roles.find('name', bRoles.bRole24.name);
  const bRole25 = message.guild.roles.find('name', bRoles.bRole25.name);
  const bRole26 = message.guild.roles.find('name', bRoles.bRole26.name);
  const bRole27 = message.guild.roles.find('name', bRoles.bRole27.name);
  const bRole28 = message.guild.roles.find('name', bRoles.bRole28.name);
  const bRole29 = message.guild.roles.find('name', bRoles.bRole29.name);
  const bRole30 = message.guild.roles.find('name', bRoles.bRole30.name);
  const bRole31 = message.guild.roles.find('name', bRoles.bRole31.name);
  const bRole32 = message.guild.roles.find('name', bRoles.bRole32.name);
  const bRole33 = message.guild.roles.find('name', bRoles.bRole33.name);
  const bRole34 = message.guild.roles.find('name', bRoles.bRole34.name);
  const bRole35 = message.guild.roles.find('name', bRoles.bRole35.name);
  const bRole36 = message.guild.roles.find('name', bRoles.bRole36.name);
  const bRole37 = message.guild.roles.find('name', bRoles.bRole37.name);
  const bRole38 = message.guild.roles.find('name', bRoles.bRole38.name);
  const bRole39 = message.guild.roles.find('name', bRoles.bRole39.name);
  const bRole40 = message.guild.roles.find('name', bRoles.bRole40.name);
  const bRole41 = message.guild.roles.find('name', bRoles.bRole41.name);
  const bRole42 = message.guild.roles.find('name', bRoles.bRole42.name);
  const bRole43 = message.guild.roles.find('name', bRoles.bRole43.name);
  const bRole44 = message.guild.roles.find('name', bRoles.bRole44.name);
  const bRole45 = message.guild.roles.find('name', bRoles.bRole45.name);
  const bRole46 = message.guild.roles.find('name', bRoles.bRole46.name);
  const bRole47 = message.guild.roles.find('name', bRoles.bRole47.name);
  const bRole48 = message.guild.roles.find('name', bRoles.bRole48.name);
  const bRole49 = message.guild.roles.find('name', bRoles.bRole49.name);
  const bRole50 = message.guild.roles.find('name', bRoles.bRole50.name);
  const bRole51 = message.guild.roles.find('name', bRoles.bRole51.name);
  const bRole52 = message.guild.roles.find('name', bRoles.bRole52.name);
  const bRole53 = message.guild.roles.find('name', bRoles.bRole53.name);
  const bRole54 = message.guild.roles.find('name', bRoles.bRole54.name);

  let sCoins = coins[message.author.id].coins;
  let sDiamonds = diamonds[message.author.id].diamonds;
  if (!role) return message.reply('musisz napisać jaką rolę chcesz kupić.');
  if (role === bRole1) {
    if (message.member.roles.has(bRole1.id)) return message.reply(`już posiadasz tę rolę!`);
    message.guild.member(message.author).addRole(bRole1.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole1.name}**`);
  }
  else if (role === bRole2) {
    if (message.member.roles.has(bRole2.id)) return message.reply(`już posiadasz tę rolę!`);
    message.guild.member(message.author).addRole(bRole2.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole2.name}**`);
  }
  else if (role === bRole3) {
    if (message.member.roles.has(bRole3.id)) return message.reply(`już posiadasz tę rolę!`);
    message.guild.member(message.author).addRole(bRole3.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole3.name}**`);
  }
  else if (role === bRole4) {
    if (message.member.roles.has(bRole4.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole4.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole4.cost)
    };
    message.guild.member(message.author).addRole(bRole4.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole4.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole5) {
    if (message.member.roles.has(bRole5.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole5.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole5.cost)
    };
    message.guild.member(message.author).addRole(bRole5.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole5.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole6) {
    if (message.member.roles.has(bRole6.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole6.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole6.cost)
    };
    message.guild.member(message.author).addRole(bRole6.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole6.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole7) {
    if (message.member.roles.has(bRole7.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole7.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole7.cost)
    };
    message.guild.member(message.author).addRole(bRole7.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole7.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole8) {
    if (message.member.roles.has(bRole8.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole8.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole8.cost)
    };
    message.guild.member(message.author).addRole(bRole8.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole8.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole9) {
    if (message.member.roles.has(bRole9.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole9.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole9.cost)
    };
    message.guild.member(message.author).addRole(bRole9.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole9.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole10) {
    if (message.member.roles.has(bRole10.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole10.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole10.cost)
    };
    message.guild.member(message.author).addRole(bRole10.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole10.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole11) {
    if (message.member.roles.has(bRole11.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole11.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole11.cost)
    };
    message.guild.member(message.author).addRole(bRole11.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole11.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole12) {
    if (message.member.roles.has(bRole12.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole12.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole12.cost)
    };
    message.guild.member(message.author).addRole(bRole12.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole12.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole13) {
    if (message.member.roles.has(bRole13.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole13.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole13.cost)
    };
    message.guild.member(message.author).addRole(bRole13.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole13.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole14) {
    if (message.member.roles.has(bRole14.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole14.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole14.cost)
    };
    message.guild.member(message.author).addRole(bRole14.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole14.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole15) {
    if (message.member.roles.has(bRole15.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole15.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole15.cost)
    };
    message.guild.member(message.author).addRole(bRole15.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole15.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole16) {
    if (message.member.roles.has(bRole16.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole16.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole16.cost)
    };
    message.guild.member(message.author).addRole(bRole16.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole16.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole17) {
    if (message.member.roles.has(bRole17.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole17.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole17.cost)
    };
    message.guild.member(message.author).addRole(bRole17.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole17.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole18) {
    if (message.member.roles.has(bRole18.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole18.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole18.cost)
    };
    message.guild.member(message.author).addRole(bRole18.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole18.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole19) {
    if (message.member.roles.has(bRole19.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole19.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole19.cost)
    };
    message.guild.member(message.author).addRole(bRole19.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole19.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole20) {
    if (message.member.roles.has(bRole20.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole20.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole20.cost)
    };
    message.guild.member(message.author).addRole(bRole20.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole20.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole21) {
    if (message.member.roles.has(bRole21.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole21.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole21.cost)
    };
    message.guild.member(message.author).addRole(bRole21.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole21.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole22) {
    if (message.member.roles.has(bRole22.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole22.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole22.cost)
    };
    message.guild.member(message.author).addRole(bRole22.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole22.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole23) {
    let pCoins = coins[bRoles.bRole23.sellerID].coins;
    if (message.member.roles.has(bRole23.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole23.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole23.cost)
    };
    coins[bRoles.bRole23.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole23.cost)
    };
    message.guild.member(message.author).addRole(bRole23.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole23.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole24) {
    let pCoins = coins[bRoles.bRole24.sellerID].coins;
    if (message.member.roles.has(bRole24.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole24.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole24.cost)
    };
    coins[bRoles.bRole24.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole24.cost)
    };
    message.guild.member(message.author).addRole(bRole24.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole24.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole25) {
    if (message.member.roles.has(bRole25.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole25.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole25.cost)
    };
    message.guild.member(message.author).addRole(bRole25.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole25.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole26) {
    if (message.member.roles.has(bRole26.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole26.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole26.cost)
    };
    message.guild.member(message.author).addRole(bRole26.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole26.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole27) {
    let pCoins = coins[bRoles.bRole27.sellerID].coins;
    if (message.member.roles.has(bRole27.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole27.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole27.cost)
    };
    coins[bRoles.bRole27.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole27.cost)
    };
    message.guild.member(message.author).addRole(bRole27.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole27.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole28) {
    let pCoins = coins[bRoles.bRole28.sellerID].coins;
    if (message.member.roles.has(bRole28.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole28.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole28.cost)
    };
    coins[bRoles.bRole28.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole28.cost)
    };
    message.guild.member(message.author).addRole(bRole28.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole28.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole29) {
    let pCoins = coins[bRoles.bRole29.sellerID].coins;
    if (message.member.roles.has(bRole29.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole29.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole29.cost)
    };
    coins[bRoles.bRole29.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole29.cost)
    };
    message.guild.member(message.author).addRole(bRole29.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole29.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole30) {
    if (message.member.roles.has(bRole30.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole30.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole30.cost)
    };
    message.guild.member(message.author).addRole(bRole30.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole30.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole31) {
    let pCoins = coins[bRoles.bRole31.sellerID].coins;
    if (message.member.roles.has(bRole31.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole31.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole31.cost)
    };
    coins[bRoles.bRole31.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole31.cost)
    };
    message.guild.member(message.author).addRole(bRole31.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole31.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole32) {
    let pCoins = coins[bRoles.bRole32.sellerID].coins;
    if (message.member.roles.has(bRole32.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole32.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole32.cost)
    };
    coins[bRoles.bRole32.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole32.cost)
    };
    message.guild.member(message.author).addRole(bRole32.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole32.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole33) {
    let pCoins = coins[bRoles.bRole33.sellerID].coins;
    if (message.member.roles.has(bRole33.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole33.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole33.cost)
    };
    coins[bRoles.bRole33.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole33.cost)
    };
    message.guild.member(message.author).addRole(bRole33.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole33.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole34) {
    if (message.member.roles.has(bRole34.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole34.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole34.cost)
    };
    message.guild.member(message.author).addRole(bRole34.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole34.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole35) {
    let pCoins = coins[bRoles.bRole35.sellerID].coins;
    if (message.member.roles.has(bRole35.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole35.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole35.cost)
    };
    coins[bRoles.bRole35.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole35.cost)
    };
    message.guild.member(message.author).addRole(bRole35.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole35.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole36) {
    let pCoins = coins[bRoles.bRole36.sellerID].coins;
    if (message.member.roles.has(bRole36.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole36.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole36.cost)
    };
    coins[bRoles.bRole36.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole36.cost)
    };
    message.guild.member(message.author).addRole(bRole36.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole36.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole37) {
    let pCoins = coins[bRoles.bRole37.sellerID].coins;
    if (message.member.roles.has(bRole37.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole37.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole37.cost)
    };
    coins[bRoles.bRole37.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole37.cost)
    };
    message.guild.member(message.author).addRole(bRole37.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole37.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole38) {
    if (message.member.roles.has(bRole38.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole38.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole38.cost)
    };
    message.guild.member(message.author).addRole(bRole38.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole38.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole39) {
    if (message.member.roles.has(bRole39.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole39.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole39.cost)
    };
    message.guild.member(message.author).addRole(bRole39.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole39.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole40) {
    let pCoins = coins[bRoles.bRole40.sellerID].coins;
    if (message.member.roles.has(bRole40.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole40.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole40.cost)
    };
    coins[bRoles.bRole40.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole40.cost)
    };
    message.guild.member(message.author).addRole(bRole40.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole40.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole41) {
    let pCoins = coins[bRoles.bRole41.sellerID].coins;
    if (message.member.roles.has(bRole41.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole41.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole41.cost)
    };
    coins[bRoles.bRole41.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole41.cost)
    };
    message.guild.member(message.author).addRole(bRole41.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole41.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole42) {
    let pCoins = coins[bRoles.bRole42.sellerID].coins;
    if (message.member.roles.has(bRole42.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sCoins < bRoles.bRole42.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole42.cost)
    };
    coins[bRoles.bRole42.sellerID] = {
      coins: pCoins + parseInt(bRoles.bRole42.cost)
    };
    message.guild.member(message.author).addRole(bRole42.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole42.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole43) {
    if (message.member.roles.has(bRole43.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole43.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole43.cost)
    };
    message.guild.member(message.author).addRole(bRole43.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole43.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole44) {
    if (message.member.roles.has(bRole44.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole44.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole44.cost)
    };
    message.guild.member(message.author).addRole(bRole44.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole44.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole45) {
    if (message.member.roles.has(bRole45.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole45.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole45.cost)
    };
    message.guild.member(message.author).addRole(bRole45.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole45.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole46) {
    if (message.member.roles.has(bRole46.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole46.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole46.cost)
    };
    message.guild.member(message.author).addRole(bRole46.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole46.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole47) {
    if (message.member.roles.has(bRole47.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole47.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole47.cost)
    };
    message.guild.member(message.author).addRole(bRole47.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole47.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole48) {
    if (message.member.roles.has(bRole48.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole48.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole48.cost)
    };
    message.guild.member(message.author).addRole(bRole48.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole48.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole49) {
    if (message.member.roles.has(bRole49.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole49.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole49.cost)
    };
    message.guild.member(message.author).addRole(bRole49.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole49.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole50) {
    if (message.member.roles.has(bRole50.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole50.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole50.cost)
    };
    message.guild.member(message.author).addRole(bRole50.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole50.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole51) {
    if (message.member.roles.has(bRole51.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole51.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole51.cost)
    };
    message.guild.member(message.author).addRole(bRole51.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole51.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole52) {
    if (message.member.roles.has(bRole52.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole52.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole52.cost)
    };
    message.guild.member(message.author).addRole(bRole52.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole52.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole53) {
    if (message.member.roles.has(bRole53.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole53.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole53.cost)
    };
    message.guild.member(message.author).addRole(bRole53.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole53.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (role === bRole54) {
    if (message.member.roles.has(bRole54.id)) return message.reply(`już posiadasz tę rolę!`);
    if (sDiamonds < 100000) return message.reply(`nie masz wymaganej liczby diamentów do odblokowania możliwości zakupu tej roli!`)
    if (sCoins < bRoles.bRole54.cost) return message.reply(`nie stać ciebie na tak drogą rolę! Może wybierz jakąś tańszą? :thinking:`);
    coins[message.author.id] = {
      coins: sCoins - parseInt(bRoles.bRole54.cost)
    };
    message.guild.member(message.author).addRole(bRole54.id);
    message.reply(`pomyślnie zakupiono rolę **${bRole54.name}**`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else return message.reply(`ta rola jest nie do kupienia.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['buy'],
  permLevel: 1
};

exports.help = {
  name: "kup",
  description: "Kupuje rolę za posiadane gwiazdki.",
  usage: "kup [nazwa roli]"
};
