const Discord = require('discord.js');
let keys = require('../keys.json');

exports.run = async (client, message, params) => {
  if(!keys[message.author.id]) {
    keys[message.author.id] = {
      keys: 0
    };
  }

  let uKeys = keys[message.author.id].keys;
  message.channel.send(`W tej chwili masz ${uKeys} :key:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "klucze",
  description: "Wyświetla liczbę posiadanych kluczy.",
  usage: "klucze"
};
