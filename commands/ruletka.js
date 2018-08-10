exports.run = (client, message, params) => {
  var roulette = new Array();
  roulette[0] = ':relieved: :gun:';
  roulette[1] = ':skull: :gun:';
  roulette[2] = ':relieved: :gun:';
  roulette[3] = ':skull: :gun:';

  message.channel.send(':thinking: :gun:')
  .then(message => {
    message.edit(roulette[Math.floor(Math.random()*roulette.length)])
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['roulette'],
  permLevel: 1
};

exports.help = {
  name: "ruletka",
  description: "Rosyjska ruletka!",
  usage: "śo!ruletka"
};
