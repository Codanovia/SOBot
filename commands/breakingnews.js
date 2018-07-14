exports.run = (client, message, params) => {
  var annoucedThing = new Array();
  annoucedThing[0] = 'Despacito ' + Math.floor(Math.random()*10);
  annoucedThing[1] = 'Syn Kurczaka ' + Math.floor(Math.random()*10);
  annoucedThing[2] = 'Shrek ' + Math.floor(Math.random()*10);
  annoucedThing[3] = 'Auta ' + Math.floor(Math.random()*10);
  annoucedThing[4] = 'Geometry Dash ' + Math.floor(Math.random()*10);
  annoucedThing[5] = 'Sezon ' + Math.floor(Math.random()*10) + ' Star Butterfly';
  annoucedThing[6] = 'Ralph Demolka ' + Math.floor(Math.random()*10);
  annoucedThing[7] = 'Czacior ' + Math.floor(Math.random()*10);
  annoucedThing[8] = 'Discord ' + Math.floor(Math.random()*10);
  annoucedThing[9] = 'ACTA ' + Math.floor(Math.random()*10);
  annoucedThing[10] = 'EPICA ' + Math.floor(Math.random()*10);
  annoucedThing[11] = 'Czacior Bot ' + Math.floor(Math.random()*10);

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
  howFound[12] = ' skradzione';
  howFound[13] = ' skradziony';
  howFound[14] = ' odkryte';
  howFound[15] = ' odkryty';
  howFound[16] = ' skonfiskowano';
  howFound[17] = ' skonfiskowane';
  howFound[18] = ' skonfiskowany';
  howFound[19] = ' skonfiskowana';
  howFound[20] = ' ogłoszono';
  howFound[21] = ' ogłoszona';
  howFound[22] = ' znaleziono';
  howFound[23] = ' znaleziona';
  howFound[24] = ' wykopano';
  howFound[25] = ' wykopana';
  howFound[26] = ' nadtknięto';
  howFound[27] = ' nadtknięta';
  howFound[28] = ' wydano';
  howFound[29] = ' wydana';
  howFound[30] = ' odnaleziono';
  howFound[31] = ' odnaleziona';
  howFound[32] = ' skradziono';
  howFound[33] = ' skradziona';
  howFound[34] = ' odkryto';
  howFound[35] = ' odkryta';

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
  whereFound[16] = ' przez Baldiego';
  whereFound[17] = ' przez sąsiada';
  whereFound[18] = ' w Arstoczce';
  whereFound[19] = ' na punkcie kontrolnym w Grestin';
  whereFound[20] = ' na Discordzie';
  whereFound[21] = ' przez Parlament Unii Europejskiej';
  whereFound[22] = ' na Gamescom';
  whereFound[23] = ' przez Unię Europejską';
  whereFound[24] = ' przez ONZ';
  whereFound[25] = ' przez NATO';
  whereFound[26] = ' przez Krzysztofa Kolumba';

  message.channel.send('**BREAKING NEWS:** ' + annoucedThing[Math.floor(Math.random()*annoucedThing.length)] + howFound[Math.floor(Math.random()*howFound.length)] + whereFound[Math.floor(Math.random()*whereFound.length)]);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['news', 'wiadomości'],
  permLevel: 1
};

exports.help = {
  name: "breakingnews",
  description: "Wyświetla losowego breaking newsa",
  usage: "breakingnews"
};
