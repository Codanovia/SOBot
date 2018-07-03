const Discord = require('discord.js');
const diamonds = require('../diamonds.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
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

  let uDiamonds = diamonds[message.author.id].diamonds;
  message.channel.send(`W tej chwili masz ${uDiamonds} :large_blue_diamond:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['diamonds'],
  permLevel: 0
};

exports.help = {
  name: "diamenty",
  description: "Wyświetla liczbę posiadanych diamentów.",
  usage: "diamenty"
};
