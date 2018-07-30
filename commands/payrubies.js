const fs = require('fs');
const rubies = require('../rubies.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  if(!rubies[message.author.id]) {
    rubies[message.author.id] = {
      rubies: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   rubies[message.author.id] = {
     rubies: Infinity
   };
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if (pUser.id === message.author.id) return message.reply('nie możesz przelać rubinów samemu sobie!');

  if(!rubies[pUser.id]) {
    rubies[pUser.id] = {
      rubies: 0
    };
  }

  let pRubies = rubies[pUser.id].rubies;
  let sRubies = rubies[message.author.id].rubies;

  if (sRubies < params[1]) return message.reply('nie masz wystarczającej liczby rubinów!');

  if (isNaN(params[1])) return message.reply('wpisana wartość jest nieprawidłowa.');

  if (params[1] < 1) return message.reply('nie możesz przelać zerowych lub ujemnych rubinów!');

  rubies[message.author.id] = {
    rubies: sRubies - parseInt(params[1])
  };

  rubies[pUser.id] = {
    rubies: pRubies + parseInt(params[1])
  };

  message.reply(`pomyślnie przelano ${params[1]} :diamonds: na konto użytkownika ${pUser}`);

  fs.writeFile('./rubies.json', JSON.stringify(rubies), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['przelewrubinów', 'donaterubies'],
  permLevel: 1
};

exports.help = {
  name: "payrubies",
  description: "Przelewa rubiny na inne konto",
  usage: "cz!payrubies (nazwa użytkownika) (liczba rubinów)"
};

exports.currency = {
  name: "payrubies",
  description: "Przelewa rubiny na inne konto"
};
