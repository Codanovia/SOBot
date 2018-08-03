const fs = require('fs');
const coins = require('../coins.json');
const rubies = require('../rubies.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  if(!rubies[message.author.id]) {
    rubies[message.author.id] = {
      rubies: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   coins[message.author.id] = {
     coins: Infinity
   };
   rubies[message.author.id] = {
     rubies: Infinity
   };
 }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[1]);

  if (params[0] === 'gwiazdek') {
    if (pUser.id === message.author.id) return message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz przelać gwiazdek samemu sobie!');

    if(!coins[pUser.id]) {
      coins[pUser.id] = {
        coins: 100
      };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if (sCoins < params[2]) return message.channel.send('<:blobtickdeny:474749732317822986> Nie masz wystarczającej liczby gwiazdek!');

    if (isNaN(params[2])) return message.channel.send('<:blobtickdeny:474749732317822986> Wpisana wartość jest nieprawidłowa.');

    if (params[2] < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz przelać zerowych lub ujemnych gwiazdek!');

    coins[message.author.id] = {
      coins: sCoins - parseInt(params[2])
    };

    coins[pUser.id] = {
      coins: pCoins + parseInt(params[2])
    };

    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie przelano ${params[2]} <:gwiazdka:473872654294843393> na konto użytkownika ${pUser}`);

    fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
      if (err) console.error(err)
    });
  }
  else if (params[0] === 'rubinów') {
    if (pUser.id === message.author.id) return message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz przelać rubinów samemu sobie!');

    if(!rubies[pUser.id]) {
      rubies[pUser.id] = {
        rubies: 0
      };
    }

    let pRubies = rubies[pUser.id].rubies;
    let sRubies = rubies[message.author.id].rubies;

    if (sRubies < params[2]) return message.channel.send('<:blobtickdeny:474749732317822986> Nie masz wystarczającej liczby rubinów!');

    if (isNaN(params[2])) return message.channel.send('<:blobtickdeny:474749732317822986> Wpisana wartość jest nieprawidłowa.');

    if (params[2] < 1) return message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz przelać zerowych lub ujemnych rubinów!');

    rubies[message.author.id] = {
      rubies: sRubies - parseInt(params[2])
    };

    rubies[pUser.id] = {
      rubies: pRubies + parseInt(params[2])
    };

    message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie przelano ${params[2]} :diamonds: na konto użytkownika ${pUser}`);

    fs.writeFile('./rubies.json', JSON.stringify(rubies), (err) => {
      if (err) console.error(err)
    });
  }
  else return message.channel.send('<:blobtickdeny:474749732317822986> Wybrana waluta jest nieprawidłowa');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pay', 'donate'],
  permLevel: 1
};

exports.help = {
  name: "przelew",
  description: "Przelewa gwiazdki lub rubiny na inne konto",
  usage: "śo!przelew gwiazdek/rubinów (nazwa użytkownika) (liczba gwiazdek/rubinów)"
};
