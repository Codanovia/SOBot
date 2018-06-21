exports.run = (client, message, params) => {
  message.channel.send('sraką');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "jaką",
  description: "Odpowiada \"sraką\"",
  usage: "jaką"
};
