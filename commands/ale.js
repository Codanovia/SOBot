exports.run = (client, message, params) => {
  message.reply('srale');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "ale",
  description: "Odpowiada \"srale\"",
  usage: "cz!ale"
};

exports.fun = {
  name: "ale",
  description: "Odpowiada \"srale\""
};
