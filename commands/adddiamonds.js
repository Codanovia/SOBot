const fs = require('fs');
const diamonds = require('../diamonds.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!diamonds[pUser.id]) {
    diamonds[pUser.id] = {
      diamonds: 0
    };
  }

  let pDiamonds = diamonds[pUser.id].diamonds;

  if (isNaN(params[1])) return message.reply('wpisana wartość jest nieprawidłowa.');

  if (params[1] < 1) return message.reply('nie możesz dodać zerowych lub ujemnych diamentów!');

  diamonds[pUser.id] = {
    diamonds: pDiamonds + parseInt(params[1])
  };

  message.reply(`pomyślnie dodano ${params[1]} :large_blue_diamond: na konto użytkownika ${pUser}`);

  fs.writeFile('./diamonds.json', JSON.stringify(diamonds), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dodajdiamenty'],
  permLevel: 4
};

exports.help = {
  name: "adddiamonds",
  description: "Dodaje diamenty na czyjeś konto",
  usage: "cz!adddiamonds (nazwa użytkownika) (liczba diamentów)"
};

exports.util = {
  name: "adddiamonds",
  description: "Dodaje diamenty na czyjeś konto"
};
