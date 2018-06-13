const config = require('../config.json');

async function embedSan(embed) {
  embed.message ? delete embed.message : null
  embed.footer ? delete embed.footer.embed : null;
  embed.provider ? delete embed.provider.embed : null;
  embed.thumbnail ? delete embed.thumbnail.embed : null;
  embed.image ? delete embed.image.embed : null;
  embed.author ? delete embed.author.embed : null;
  embed.fields ? embed.fields.forEach(f => {delete f.embed;}) : null;
  return embed;
}

exports.run = async (client, message, params) => {
  const modlog = client.channels.find('name', 'ogłoszenia');
  const caseNumber = params.shit();
  const newReason = params.join(' ');

  await modlog.fetchMessages({limit:100}).then((messages) => {
    const caseLog = messages.filter(m => m.author.id === client.user.id &&
    m.embeds[0] &&
    m.embeds[0].type === 'rich' &&
    m.embeds[0].footer &&
    m.embeds[0].footer.text.startsWith('Przypadek') &&
    m.embeds[0].footer.text === `Przypadek ${caseNumber}`
  ).first();
    modlog.fetchMessage(caseLog.id).then(logMsg => {
      const embed = logMsg.embeds[0];
      embedSan(embed);
      embed.description = embed.description.replace(`Oczekuję wkładu moderatora. Użyj ${config.prefix}reason ${caseNumber} <powód>.`, newReason);
      logMsg.edit({embed});
    });
  });
};

exports.conf = {
  aliases: ['editreason'],
  permLevel: 2
};

exports.help = {
  name: 'reason',
  description: 'Edytuje powód dokonania działania moderacyjnego (ostrzeżenie, ban lub unban).',
  usage: 'reason (numer przypadku) (nowy powód)'
};
