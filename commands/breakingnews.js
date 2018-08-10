exports.run = (client, message, params) => {
  var news = new Array();
  news[0] = '**BREAKING NEWS:** ';
  news[1] = '**FakTy:** ';
  news[2] = '**BREAKING NEWS:** ';
  news[3] = '**FakTy:** ';
  news[4] = 'placeholder';

  var annoucedThing = new Array();
  annoucedThing[0] = 'Despacito ' + Math.ceil(Math.random()*10);
  annoucedThing[1] = 'Syn Kurczaka ' + Math.ceil(Math.random()*10);
  annoucedThing[2] = 'Shrek ' + Math.ceil(Math.random()*10);
  annoucedThing[3] = 'Auta ' + Math.ceil(Math.random()*10);
  annoucedThing[4] = 'Geometry Dash ' + Math.ceil(Math.random()*10);
  annoucedThing[5] = 'Sezon ' + Math.ceil(Math.random()*10) + ' Star Butterfly';
  annoucedThing[6] = 'Ralph Demolka ' + Math.ceil(Math.random()*10);
  annoucedThing[7] = 'Czacior ' + Math.ceil(Math.random()*10);
  annoucedThing[8] = 'Discord ' + Math.ceil(Math.random()*10);
  annoucedThing[9] = 'ACTA ' + Math.ceil(Math.random()*10);
  annoucedThing[10] = 'EPICA ' + Math.ceil(Math.random()*10);
  annoucedThing[11] = 'Czacior Bot ' + Math.ceil(Math.random()*10);
  annoucedThing[12] = 'Internet Explorer ' + Math.ceil(Math.random()*100);
  annoucedThing[13] = 'Google Chrome ' + Math.ceil(Math.random()*100);
  annoucedThing[14] = 'Sezon ' + Math.ceil(Math.random()*25) + ' Fortnite\'a';
  annoucedThing[15] = 'Opera ' + Math.ceil(Math.random()*100);
  annoucedThing[16] = 'Microsoft Edge ' + Math.ceil(Math.random()*100);
  annoucedThing[17] = 'Sezon ' + Math.ceil(Math.random()*999999) + ' Mody na Sukces'
  annoucedThing[18] = 'Baldi ' + Math.ceil(Math.random()*10);
  annoucedThing[19] = Math.ceil(Math.random()*10) + ' Rzesza';
  annoucedThing[20] = 'Saper ' + Math.ceil(Math.random()*10);
  annoucedThing[21] = Math.ceil(Math.random()*10);
  annoucedThing[22] = 'ŚOBot ' + Math.ceil(Math.random()*10);
  annoucedThing[23] = 'Świat Oodrona ' + Math.ceil(Math.random()*10);
  annoucedThing[24] = 'Niewidzialny nick';
  annoucedThing[25] = annoucedThing[Math.floor(Math.random()*annoucedThing.length)] + ': Battle Royale';
  annoucedThing[26] = 'placeholder';

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
  howFound[36] = 'placeholder';

  var whereFound = new Array();
  whereFound[0] = ' gdzieś tam';
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
  whereFound[27] = ' przeze mnie';
  whereFound[28] = 'placeholder';

  message.channel.send(news[Math.floor(Math.random()*news.length)] + annoucedThing[Math.floor(Math.random()*annoucedThing.length)] + howFound[Math.floor(Math.random()*howFound.length)] + whereFound[Math.floor(Math.random()*whereFound.length)]);

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
  usage: "śo!breakingnews"
};
