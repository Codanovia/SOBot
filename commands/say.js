exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) return;
  message.channel.send(result);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['powiedz'],
  permLevel: 1
};

exports.help = {
  name: "say",
  description: "Pisze to samo co użytkownik który pisze tę komendę.",
  usage: "say (jakieś tam słowo czy zdanie)"
};
