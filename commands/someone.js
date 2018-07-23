exports.run = (client, message, params) => {
  const guild = message.guild;
  var emote = new Array();
  emote[0] = '(⁄ ⁄•⁄ω⁄•⁄ ⁄)';
  emote[1] = 'ಠ_ಠ';
  emote[2] = '༼ つ ◕_◕ ༽つ';
  emote[3] = '(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. o ･ ｡ﾟ';
  emote[4] = '¯(°_o)/¯';
  emote[5] = '(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿';
  emote[6] = '(╯°□°）╯︵ ┻━┻';
  emote[7] = '(◕‿◕✿)';
  emote[8] = 'ヽ༼ ಠ益ಠ ༽ﾉ';

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
  memebers[12] = 'QRX';
  memebers[13] = 'P18plus';
  memebers[14] = 'Novorossia HD Mapper';
  memebers[15] = 'vistafan12';
  memebers[16] = 'bartekj1222';
  memebers[17] = 'Archi';
  memebers[18] = 'argax';
  memebers[19] = 'LukaszM600';
  memebers[20] = 'tobiasz';
  memebers[21] = 'Przeróbki153';
  memebers[22] = 'Misiek7';
  memebers[23] = 'm6200';
  memebers[24] = 'Dexter !';
  memebers[25] = 'Jedenasty Doktor';
  memebers[26] = 'Dekoder Polsatu';
  memebers[27] = 'Alex Top';

  message.channel.send(`**@someone ${emote[Math.floor(Math.random()*emote.length)]} *${memebers[Math.floor(Math.random()*memebers.length)]}***`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "someone",
  description: "@someone party with me",
  usage: "cz!someone"
};

exports.fun = {
  name: "someone",
  description: "@someone party with me"
};
