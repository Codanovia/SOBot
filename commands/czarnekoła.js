const Discord = require('discord.js');
const blackorbs = require('../blackorbs.json');
const config = require('../config.json');

exports.run = async (client, message, params) => {
  if(!blackorbs[message.author.id]) {
    blackorbs[message.author.id] = {
      blackorbs: 0
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
