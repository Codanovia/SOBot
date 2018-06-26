exports.run = (client, message, params) => {
  let messagecount = parseInt(params.join(' '));
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear'],
  permLevel: 0
};

exports.help = {
  name: "purge",
  description: "Usuwa wiadomości od 1 do sprzed 14 dni temu.",
  usage: "purge (liczba wiadomości do usunięcia)"
};
