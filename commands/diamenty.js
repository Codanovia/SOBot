const diamonds = require('../diamonds.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
      diamonds: 0
    };
  }

  if(!diamonds[pUser.id]) {
    diamonds[pUser.id] = {
      diamonds: 0
    };
  }

  if (message.author.id === config.ownerID) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 if (message.author.id === config.ownerID7) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 let uDiamonds = diamonds[message.author.id].diamonds;
 let sDiamonds = diamonds[pUser.id].diamonds;
 if (message.mentions.users.size < 1) {
   message.channel.send(`W tej chwili masz ${uDiamonds} :large_blue_diamond:`)
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sDiamonds} :large_blue_diamond:`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['diamonds'],
  permLevel: 0
};

exports.help = {
  name: "diamenty",
  description: "Wyświetla liczbę posiadanych diamentów",
  usage: "cz!diamenty [nazwa użytkownika]"
};

exports.currency = {
  name: "diamenty",
  description: "Wyświetla liczbę posiadanych diamentów"
};
