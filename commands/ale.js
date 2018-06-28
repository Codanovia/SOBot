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
  usage: "ale"
};
