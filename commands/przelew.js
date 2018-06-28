const Discord = require('discord.js');
const fs = require('fs');
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

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if (pUser.id === message.author.id) return message.reply('nie możesz przelać gwiazdek samemu sobie!');

  if(!coins[pUser.id]) {
    coins[pUser.id] = {
      coins: 100
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if (sCoins < params[1]) return message.reply('nie masz wystarczającej liczby gwiazdek!');

  if (isNaN(params[1])) return message.reply('wpisana wartość jest nieprawidłowa.');

  if (params[1] < 1) return message.reply('nie możesz przelać zerowych lub ujemnych gwiazdek!');

  coins[message.author.id] = {
    coins: sCoins - parseInt(params[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(params[1])
  };

  message.reply(`pomyślnie przelano ${params[1]} <:gwiazdka:424229903664414720> na konto użytkownika ${pUser}`);

  fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
    if (err) console.error(err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pay', 'donate'],
  permLevel: 1
};

exports.help = {
  name: "przelew",
  description: "Przelewa gwiazdki na inne konto.",
  usage: "przelew (nazwa użytkownika) (liczba gwiazdek)"
};
