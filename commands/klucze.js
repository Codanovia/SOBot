const Discord = require('discord.js');
const keys = require('../keys.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!keys[message.author.id]) {
    keys[message.author.id] = {
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

  let uKeys = keys[message.author.id].keys;
  message.channel.send(`W tej chwili masz ${uKeys} :key:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['keys'],
  permLevel: 0
};

exports.help = {
  name: "klucze",
  description: "Wyświetla liczbę posiadanych kluczy.",
  usage: "klucze"
};
