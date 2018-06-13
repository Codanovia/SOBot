exports.run = (client, message, params) => {
  message.channel.send('<:kebap:431920991971573773>')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kebab'],
  permLevel: 0
};

exports.help = {
  name: "kebap",
  description: "Przygotowuje świeżego, tureckiego kebapa.",
  usage: "kebap"
};
