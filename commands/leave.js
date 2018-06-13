exports.run = (client, message, params) => {
  let voiceChan = message.member.voiceChannel;
  if (!voiceChan) {
    message.channel.send('Nie jestem na żadnym kanale głosowym!')
  } else {
    message.channel.send('Opuszczam kanał głosowy...').then(() => {
      voiceChan.leave();
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
  name: "leave",
  description: "Wyprasza bota z kanału głosowego.",
  usage: "leave"
};
