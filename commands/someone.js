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

  var members = new Array();
  members[0] = 'GD Oodron';
  members[1] = 'Codanovia';
  members[2] = 'DarwinShow';
  members[3] = 'Dosyl';
  members[4] = 'ItsZax';
  members[5] = 'GD Buster';
  members[6] = 'K03a';
  members[7] = '7Edg3';
  members[8] = 'Nagrania24PL';
  members[9] = 'BW134';
  members[10] = 'SJTV';
  members[11] = 'Damianradek';
  members[12] = 'anon';
  members[13] = 'marcin6200';
  members[14] = 'QRX';
  members[15] = 'P18plus';
  members[16] = 'Dexter !';
  members[17] = 'Novorossia HD Mapper';
  members[18] = 'vistafan12';

  message.channel.send(`**@someone ${emote[Math.floor(Math.random()*emote.length)]} *${members[Math.floor(Math.random()*members.length)]}***`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "someone",
  description: "Pamiętacie ten typ wzmianki z czasów Prima Aprilis 2018? Teraz jest on tutaj w Czacior Bocie!",
  usage: "someone"
};
