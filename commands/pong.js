exports.run = (client, message, params) => {
  message.channel.send('Ponging...')
    .then(message => {
      message.edit(`Ping! \`${message.createdTimestamp}ms\``);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "pong",
  description: "...Ping!",
  usage: "śo!pong"
};
