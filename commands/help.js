const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send(`= Lista komend =\n\n[Wpisz komendę ${config.prefix}help (nazwa komendy) dla szczegółów wybranej komendy. Wersja bota: 1.3.3]\n\n${client.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'asciidoc'});
    message.reply('lista komend została wysłana na PW!');
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nAliasy:: ${command.conf.aliases}\nZastosowanie:: ${command.help.usage}`, {code: 'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'pomoc', 'hlep', 'commands', 'komendy', 'helpme'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Wyświetla wszystkie dostępne komendy tego bota.',
  usage: 'help [komenda]'
};
