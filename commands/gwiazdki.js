const Discord = require('discord.js');
let coins = require('../coins.json');

exports.run = async (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  let uCoins = coins[message.author.id].coins;
  message.channel.send(`W tej chwili masz ${uCoins} <:gwiazdka:424229903664414720>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "gwiazdki",
  description: "Wyświetla ilość posiadanych gwiazdek.",
  usage: "gwiazdki"
};
