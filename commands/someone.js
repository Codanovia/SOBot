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
  memebers[14] = 'Dexter !';
  memebers[15] = 'Novorossia HD Mapper';
  memebers[16] = 'vistafan12';
  memebers[17] = 'bartekj1222';
  memebers[18] = 'Archi';
  memebers[19] = 'argax';
  memebers[20] = 'LukaszM600';
  memebers[21] = 'Cichy';
  memebers[22] = 'tobiasz';
  memebers[23] = 'Misiek7';
  memebers[24] = 'Przeróbki153';

  message.channel.send(`**@someone ${emote[Math.floor(Math.random()*emote.length)]} *${memebers[Math.floor(Math.random()*memebers.length)]}***`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "someone",
  description: "@someone party with me",
  usage: "someone"
};
