exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) return client.user.setActivity('cały serwer | cz!help | v. 1.4.1', {type: 'WATCHING'});
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
  description: "Zmienia grę w którą gra bot",
  usage: "cz!setgame (nazwa gry)"
};

exports.util = {
  name: "setgame",
  description: "Zmienia grę w którą gra bot"
};
