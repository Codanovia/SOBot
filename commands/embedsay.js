const {RichEmbed} = require('discord.js');

exports.run = (client, message, params) => {
  var result = params.join(' ');
  if (!result) return;
  const embed = new RichEmbed()
  .setAuthor('Czacior Bot', 'https://i.imgur.com/PdesVLp.png')
  .setColor([0, 128, 0])
  .setDescription(result);
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayembed'],
  permLevel: 0
};

exports.help = {
  name: "embedsay",
  description: "Pisze to samo co użytkownik który pisze tę komendę, ale w środku pudła Rich Embed.",
  usage: "embedsay (jakieś tam słowo czy zdanie)"
};
