const keys = require('../keys.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!keys[message.author.id]) {
    keys[message.author.id] = {
      keys: 0
    };
  }

  if(!keys[pUser.id]) {
    keys[pUser.id] = {
      keys: 0
    };
  }

  if (message.author.id === config.ownerID) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 if (message.author.id === config.ownerID7) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 let uKeys = keys[message.author.id].keys;
 let sKeys = keys[pUser.id].keys;
 if (message.mentions.users.size < 1) {
   message.channel.send(`W tej chwili masz ${uKeys} :key:`)
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sKeys} :key:`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['keys'],
  permLevel: 0
};

exports.help = {
  name: "klucze",
  description: "Wyświetla liczbę posiadanych kluczy",
  usage: "cz!klucze [nazwa użytkownika]"
};

exports.currency = {
  name: "klucze",
  description: "Wyświetla liczbę posiadanych kluczy"
};
