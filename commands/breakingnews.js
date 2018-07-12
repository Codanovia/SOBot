exports.run = (client, message, params) => {
  var annoucedThing = new Array();
  annoucedThing[0] = 'Despacito ' + Math.ceil(Math.random()*10);
  annoucedThing[1] = 'Syn Kurczaka ' + Math.ceil(Math.random()*10);
  annoucedThing[2] = 'Shrek ' + Math.ceil(Math.random()*10);
  annoucedThing[3] = 'Auta ' + Math.ceil(Math.random()*10);
  annoucedThing[4] = 'Geometry Dash ' + Math.ceil(Math.random()*10);
  annoucedThing[5] = 'Sezon ' + Math.ceil(Math.random()*10) + ' Star Butterfly';
  annoucedThing[6] = 'Ralph Demolka ' + Math.ceil(Math.random()*10);

  var howFound = new Array();
  howFound[0] = ' ogłoszone';
  howFound[1] = ' ogłoszony';
  howFound[2] = ' znalezione';
  howFound[3] = ' znaleziony';
  howFound[4] = ' wykopane';
  howFound[5] = ' wykopany';
  howFound[6] = ' nadtknięte';
  howFound[7] = ' nadtknięty';
  howFound[8] = ' wydane';
  howFound[9] = ' wydany';
  howFound[10] = ' odnalezione';
  howFound[11] = ' odnaleziony';

  var whereFound = new Array();
  whereFound[1] = ' na E3';
  whereFound[2] = ' na budowie';
  whereFound[3] = ' na lotnisku';
  whereFound[4] = ' w USA';
  whereFound[5] = ' w Polsce';
  whereFound[6] = ' u sąsiada';
  whereFound[7] = ' w szpitalu';
  whereFound[8] = ' na bezludnej wyspie';
  whereFound[9] = ' w telewizji';
  whereFound[10] = ' na peronie 9 i 3/4';
  whereFound[11] = ' na stacji kolejowej';
  whereFound[12] = ' na Mewni';
  whereFound[13] = ' w przyszłości';
  whereFound[14] = ' na Czaciorze';
  whereFound[15] = ' w kodzie Czacior Bota';

  message.channel.send('BREAKING NEWS: ' + annoucedThing[Math.floor(Math.random()*annoucedThing.length)] + howFound[Math.floor(Math.random()*howFound.length)] + whereFound[Math.floor(Math.random()*whereFound.length)]);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['news'],
  permLevel: 1
};

exports.help = {
  name: "breakingnews",
  description: "Wyświetla losowego breaking newsa",
  usage: "breakingnews"
};
