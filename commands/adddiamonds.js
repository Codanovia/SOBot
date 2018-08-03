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

  if (isNaN(params[1])) return message.channel.send('<:blobtickdeny:474749732317822986> Wpisana wartość jest nieprawidłowa.');

  diamonds[pUser.id] = {
    diamonds: pDiamonds + parseInt(params[1])
  };

  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie dodano ${params[1]} :large_blue_diamond: na konto użytkownika ${pUser}`);

  fs.writeFile('./diamonds.json', JSON.stringify(diamonds), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dodajdiamenty'],
  permLevel: 3
};

exports.help = {
  name: "adddiamonds",
  description: "Dodaje diamenty na czyjeś konto",
  usage: "śo!adddiamonds (nazwa użytkownika) (liczba diamentów)"
};
