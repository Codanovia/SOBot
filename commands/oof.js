exports.run = (client, message, params) => {
  message.author.send('<:oof:474751352241651734> Oof! Jeśli chcesz się odrodzić, to tutaj masz zaproszenie: https://discord.gg/E36ZGZE :smiley:');
  message.guild.member(message.author).kick();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "oof",
  description: "Wyrzuca autora wiadomości z serwera",
  usage: "śo!oof"
};
