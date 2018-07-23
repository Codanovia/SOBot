exports.run = (client, message, params) => {
  message.reply('sraka');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "jaka",
  description: "Odpowiada \"sraka\"",
  usage: "cz!jaka"
};

exports.fun = {
  name: "jak",
  description: "Odpowiada \"sraka\""
};
