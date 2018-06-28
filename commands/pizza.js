exports.run = (client, message, params) => {
  message.reply(':pizza:');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "pizza",
  description: "Przygotowuje pizzę",
  usage: "pizza"
};
