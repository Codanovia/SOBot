const Discord = require('discord.js');
let diamonds = require('../diamonds.json');

exports.run = async (client, message, params) => {
  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
      diamonds: 0
    };
  }

  let uDiamonds = diamonds[message.author.id].diamonds;
  message.channel.send(`W tej chwili masz ${uDiamonds} :large_blue_diamond:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "diamenty",
  description: "Wyświetla ilość posiadanych diamentów.",
  usage: "diamenty"
};
