exports.run = (client, message, params) => {
  var eightBall = new Array();
  eightBall[0] = 'Tak';
  eightBall[1] = 'Nie';
  eightBall[2] = 'Zapytaj ponownie';
  eightBall[3] = 'Nie wiem';
  eightBall[4] = 'Szacowania są dobre';
  eightBall[5] = 'Nie rozumiem co napisałeś';
  eightBall[6] = 'Myślę, że tak';
  eightBall[7] = 'Na pewno tak';
  eightBall[8] = 'Niestety, nie';
  eightBall[9] = 'Coś czuję, że tak';
  eightBall[10] = 'Czuję, że nie';
  eightBall[11] = 'Absolutnie nie!';
  eightBall[12] = 'Nie myśl o tym';
  eightBall[13] = 'O co ci chodzi?';
  eightBall[14] = 'Na pewno nie';
  eightBall[15] = 'Może';
  eightBall[16] = 'Myślę, że nie';
  eightBall[17] = 'Spierdalaj';
  eightBall[18] = 'Powiem ci póżniej';
  eightBall[19] = 'Nie licz na to';
  eightBall[20] = 'Najprawdopodobniej';
  eightBall[21] = 'To jest pewne';
  eightBall[22] = 'Bardzo wątpliwie';
  eightBall[23] = 'Lepiej, żebyś nie wiedział';
  eightBall[24] = 'Skoncentruj się i zapytaj ponownie';
  eightBall[25] = 'Zamknij pizde i chuj ci w kolano';

  message.channel.send(':8ball: :thinking:')
  .then(message => {
    message.edit(`:8ball: **${eightBall[Math.floor(Math.random()*eightBall.length)]}**`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "8ball",
  description: "Pyta magiczną kulę 8 o coś tam",
  usage: "śo!8ball (pytanie)"
};
