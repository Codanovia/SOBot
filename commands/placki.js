exports.run = (client, message, params) => {
  var placki = new Array();
  placki[0] = 'https://cdn.discordapp.com/attachments/461251813178343449/463043690332422164/Bez_tytuu.gif';
  placki[1] = 'https://cdn.discordapp.com/attachments/461251813178343449/463043445494251520/Bez_tytuu1.gif';
  placki[2] = 'https://cdn.discordapp.com/attachments/461251813178343449/463043690332422164/Bez_tytuu.gif';
  placki[3] = 'https://cdn.discordapp.com/attachments/461251813178343449/463043445494251520/Bez_tytuu1.gif';
  message.channel.send(placki[Math.floor(Math.random()*placki.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['placusie', 'pancakes', 'naleśniki'],
  permLevel: 1
};

exports.help = {
  name: "placki",
  description: "Pokazuje gifa z królikiem jedzącego placki, czy tam naleśniki",
  usage: "cz!placki"
};

exports.fun = {
  name: "placki",
  description: "Pokazuje gifa z królikiem jedzącego placki, czy tam naleśniki"
};
