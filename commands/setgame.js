exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) return client.user.setActivity('cały serwer | v. 2.0.5', {type: 'WATCHING'});
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
  usage: "śo!setgame (nazwa gry)"
};
