exports.run = (client, message, params = []) => {
  message.channel.send('Pinging...')
    .then(message => {
      message.edit(`Pong! (took: \`${message.createdTimestamp - message.createdTimestamp}ms\`)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "ping",
  description: "Klasyczna komenda ping-pong.",
  usage: "ping"
};
