const Discord = require('discord.js');
const coins = require('../coins.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  if (message.author.id === config.ownerID) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

  let uCoins = coins[message.author.id].coins;
  message.channel.send(`W tej chwili masz ${uCoins} <:gwiazdka:424229903664414720>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stars'],
  permLevel: 0
};

exports.help = {
  name: "gwiazdki",
  description: "Wyświetla liczbę posiadanych gwiazdek.",
  usage: "gwiazdki"
};
