exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) {
    while (client.user.presence.status = 'online') {
      client.user.setActivity('cz!help');
      setTimeout(120000);
      client.user.setActivity('cały serwer', {type: 'WATCHING'});
      setTimeout(120000);
    }
  }
  client.user.setActivity(result);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['game'],
  permLevel: 1
};

exports.help = {
  name: "setgame",
  description: "Zmienia grę w którą gra bot. Domyślna gra to cz!help.",
  usage: "setgame"
};
