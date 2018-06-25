exports.run = (client, message, params) => {
  let voiceChan = message.member.voiceChannel;
  if (!voiceChan || voiceChan.type !== 'voice') {
    message.channel.send('Nie jesteś na żadnym kanale głosowym!');
  } else if(message.guild.voiceConnection) {
    message.channel.send('Już jestem na kanale głosowym!');
  } else {
    message.channel.send('Dołączam do kanału głosowego...').then(() => {
      voiceChan.join().then(() => {
        message.channel.send('Dołączono pomyślnie.');
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "join",
  description: "Zaprasza bota do kanału głosowego.",
  usage: "join"
};
