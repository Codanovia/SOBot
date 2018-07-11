exports.run = (client, message, params) => {
  var memebers = new Array();
  memebers[0] = 'GD Oodron';
  memebers[1] = 'Codanovia';
  memebers[2] = 'DarwinShow';
  memebers[3] = 'Dosyl';
  memebers[4] = 'ItsZax';
  memebers[5] = 'GD Buster';
  memebers[6] = 'K03a';
  memebers[7] = '7Edg3';
  memebers[8] = 'Nagrania24PL';
  memebers[9] = 'BW134';
  memebers[10] = 'SJTV';
  memebers[11] = 'Damianradek';
  memebers[12] = 'anon';
  memebers[13] = 'marcin6200';
  memebers[14] = 'QRX';
  memebers[15] = 'P18plus';
  memebers[16] = 'Dexter';
  memebers[17] = 'Novorossia HD Mapper';
  memebers[18] = 'vistafan12';
  memebers[19] = 'bartekj1222';
  memebers[20] = 'Archi';
  memebers[21] = 'argax';
  memebers[22] = 'LukaszM600';
  memebers[23] = 'Cichy';
  memebers[24] = 'tobiasz';
  
  var memeText = new Array();
  memeText[0] = 'kasme';
  memeText[1] = 'kest';
  memeText[2] = 'qiem';
  memeText[3] = 'wyjebame';
  memeText[4] = 'Chirwacja';
  memeText[5] = 'Chorwacj';
  memeText[6] = 'dupa pieprzyć';
  memeText[7] = 'HOLLY SHIT!!!!!!!!1111111111111111111111 TWENTY DOLLARS!!!!!!!!!!!!!!!!11111111111111111111111 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111111111111111111111111111111111';
  memeText[8] = '[BŁONT: Kutaf...]';
  memeText[10] = 'Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar';
  memeText[11] = 'Oof!';
  memeText[12] = 'SPORRRTOWA';
  memeText[13] = memebers[Math.floor(Math.random()*memebers.length)].toUpperCase() + ' KRUL';
  memeText[14] = '<:E_:461532037405343756>';
  memeText[15] = '[BŁONT: ' + memeText[Math.floor(Math.random()*memeText.length)] + ']';

  message.channel.send(memeText[Math.floor(Math.random()*memeText.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['text', 'mem', 'memy', 'meme'],
  permLevel: 1
};

exports.help = {
  name: "tekst",
  description: "Losuje jednego ze śmiesznych tekstów które są często używane na Czaciorze",
  usage: "tekst"
};
