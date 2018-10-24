exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) result = `Disco`;
  message.channel.send(`http://disco.fleo.se/${result}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "disco",
  description: "DISCO!!!!!!!!!",
  usage: "śo!disco (tekst)"
};
