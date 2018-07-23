const fs = require('fs');
const keys = require('../keys.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!keys[pUser.id]) {
    keys[pUser.id] = {
      keys: 0
    };
  }

  let pKeys = keys[pUser.id].keys;

  if (isNaN(params[1])) return message.reply('wpisana wartość jest nieprawidłowa.');

  if (params[1] < 1) return message.reply('nie możesz dodać zerowych lub ujemnych kluczy!');

  keys[pUser.id] = {
    keys: pKeys + parseInt(params[1])
  };

  message.reply(`pomyślnie dodano ${params[1]} :key: na konto użytkownika ${pUser}`);

  fs.writeFile('./keys.json', JSON.stringify(keys), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dodajklucze'],
  permLevel: 4
};

exports.help = {
  name: "addkeys",
  description: "Dodaje klucze na czyjeś konto",
  usage: "cz!addkeys (nazwa użytkownika) (liczba kluczy)"
};

exports.util = {
  name: "addkeys",
  description: "Dodaje klucze na czyjeś konto"
};
