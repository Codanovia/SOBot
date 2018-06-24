exports.run = (client, message, params) => {
  var ogar = new Array();
  ogar[0] = 'https://cdn.discordapp.com/attachments/422082830085128233/459828007113195530/ogar_1.png';
  ogar[1] = 'https://cdn.discordapp.com/attachments/422082830085128233/459694325979283468/ogar.png';
  ogar[2] = 'https://cdn.discordapp.com/attachments/422082830085128233/456126905746456597/tele.png';

  message.channel.send(ogar[Math.floor(Math.random()*ogar.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ogar",
  description: "Wysyła zdjęcie z pingwinem sierżantem, żeby ten ogarnął wszystkich",
  usage: "ogar"
};
