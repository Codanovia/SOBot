exports.run = (client, message, params) => {
  message.reply(':hotdog:');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "hotdog",
  description: "Przygotowuje hot doga",
  usage: "cz!hotdog"
};

exports.fun = {
  name: "hotdog",
  description: "Przygotowuje hot doga"
};
