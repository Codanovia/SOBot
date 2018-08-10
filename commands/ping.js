exports.run = (client, message, params) => {
  message.channel.send('Pinging...')
    .then(msg => {
      msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
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
  description: "...Pong!",
  usage: "śo!ping"
};
