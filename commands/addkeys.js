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

  if (isNaN(params[1])) return message.channel.send('<:blobtickdeny:474749732317822986> Wpisana wartość jest nieprawidłowa.');

  keys[pUser.id] = {
    keys: pKeys + parseInt(params[1])
  };

  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie dodano ${params[1]} :key: na konto użytkownika ${pUser}`);

  fs.writeFile('./keys.json', JSON.stringify(keys), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dodajklucze'],
  permLevel: 3
};

exports.help = {
  name: "addkeys",
  description: "Dodaje klucze na czyjeś konto",
  usage: "śo!addkeys (nazwa użytkownika) (liczba kluczy)"
};
