exports.run = (client, message, params) => {
  message.reply('srak');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "jak",
  description: "Odpowiada \"srak\"",
  usage: "jak"
};
