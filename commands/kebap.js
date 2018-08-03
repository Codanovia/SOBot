exports.run = (client, message, params) => {
  message.reply('<:kebap:431920991971573773>');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kebab'],
  permLevel: 1
};

exports.help = {
  name: "kebap",
  description: "Przygotowuje świeżego kebapa",
  usage: "śo!kebap"
};
