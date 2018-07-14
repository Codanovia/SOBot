const Discord = require('discord.js');
const blackorbs = require('../blackorbs.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!blackorbs[message.author.id]) {
    blackorbs[message.author.id] = {
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
  message.channel.send(`W tej chwili masz ${uBlackorbs} :black_circle:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['czarnekule', 'blackcircles', 'blackorbs'],
  permLevel: 0
};

exports.help = {
  name: "czarnekoła",
  description: "Wyświetla liczbę posiadanych czarnych kół.",
  usage: "czarnekoła"
};
