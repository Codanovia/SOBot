exports.run = (client, message, params) => {
  message.reply('sraką');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "jaką",
  description: "Odpowiada \"sraką\"",
  usage: "cz!jaką"
};

exports.fun = {
  name: "jaką",
  description: "Odpowiada \"sraką\""
};
