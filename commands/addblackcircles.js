const fs = require('fs');
const blackorbs = require('../blackorbs.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!blackorbs[pUser.id]) {
    blackorbs[pUser.id] = {
      blackorbs: 0
    };
  }

  let pBlackorbs = blackorbs[pUser.id].blackorbs;

  if (isNaN(params[1])) return message.channel.send('<:blobtickdeny:474749732317822986> Wpisana wartość jest nieprawidłowa.');

  blackorbs[pUser.id] = {
    blackorbs: pBlackorbs + parseInt(params[1])
  };

  message.channel.send(`<:blobtickaccept:474749869727416333> Pomyślnie dodano ${params[1]} :black_circle: na konto użytkownika ${pUser}`);

  fs.writeFile('./blackorbs.json', JSON.stringify(blackorbs), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dodajczarnekoła'],
  permLevel: 4
};

exports.help = {
  name: "addblackcircles",
  description: "Dodaje czarne koła na czyjeś konto",
  usage: "śo!addblackcircles (nazwa użytkownika) (liczba czarnych kół)"
};
