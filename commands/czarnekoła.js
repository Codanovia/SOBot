const blackorbs = require('../blackorbs.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!blackorbs[message.author.id]) {
    blackorbs[message.author.id] = {
      blackorbs: 0
    };
  }

  if(!blackorbs[pUser.id]) {
    blackorbs[pUser.id] = {
      blackorbs: 0
    };
  }

  if (message.author.id === config.ownerID) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

  let uBlackorbs = blackorbs[message.author.id].blackorbs;
  let sBlackorbs = blackorbs[pUser.id].blackorbs;
  if (message.mentions.users.size < 1) {
    message.channel.send(`W tej chwili masz ${uBlackorbs} :black_circle:`)
  }
  else {
    message.channel.send(`Ten użytkownik ma ${sBlackorbs} :black_circle:`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['czarnekule', 'blackcircles', 'blackorbs'],
  permLevel: 0
};

exports.help = {
  name: "czarnekoła",
  description: "Wyświetla liczbę posiadanych czarnych kół",
  usage: "cz!czarnekoła [nazwa użytkownika]"
};

exports.currency = {
  name: "czarnekoła",
  description: "Wyświetla liczbę posiadanych czarnych kół"
};
