exports.run = (client, message, params) => {
  let messagecount = parseInt(params.join(' '));
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear'],
  permLevel: 2
};

exports.help = {
  name: "purge",
  description: "Usuwa wybraną liczbę wiadomości",
  usage: "purge (liczba wiadomości do usunięcia)"
};
