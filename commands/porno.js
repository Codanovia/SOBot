exports.run = (client, message, params) => {
  message.author.send('A czy twoi rodzice wiedzą, że ty takie rzeczy oglądasz? :thinking: Dobra, nieważne, masz tutaj zaproszenie z powrotem: https://discord.gg/sRhcFe3 :smiley:');
  message.guild.member(message.author).kick();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porn'],
  permLevel: 1
};

exports.help = {
  name: "porno",
  description: "To samo co śo!oof",
  usage: "śo!porno"
};
