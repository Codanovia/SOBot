exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) return client.user.setActivity('cały serwer', { type: 'WATCHING' });
  client.user.setActivity(result);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['game', 'setactivity'],
  permLevel: 1
};

exports.help = {
  name: "setgame",
  description: "Zmienia grę w którą gra bot. Domyślna gra to cz!help.",
  usage: "setgame"
};
