exports.run = (client, message, params = []) => {
  message.channel.send('Ponging...')
    .then(message => {
      message.edit(`Ping! (took: ${message.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "pong",
  description: "Przeciwieństwo komendy cz!ping.",
  usage: "pong"
};
