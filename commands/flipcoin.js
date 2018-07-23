exports.run = (client, message, params) => {
  var coin = new Array();
  coin[0] = 'orła!';
  coin[2] = 'reszkę!';
  coin[2] = 'orła!';
  coin[3] = 'reszkę!';

  message.channel.send('Rzucam monetę...')
    .then(message => {
      message.edit(`Wylosowano **${coin[Math.floor(Math.random()*coin.length)]}**`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['coin', 'ocr'],
  permLevel: 1
};

exports.help = {
  name: "flipcoin",
  description: "Orzeł czy reszka?",
  usage: "cz!flipcoin"
};

exports.fun = {
  name: "flipcoin",
  description: "Orzeł czy reszka?"
};
