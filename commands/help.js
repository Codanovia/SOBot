const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Lista komend =\n\n[Wpisz komendę ${config.prefix}help (nazwa komendy) dla szczegółów wybranej komendy. Komendy muzyczne są dostępne w komendzie cz!musichelp. Wersja bota: 1.0.4]\n\n${client.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nZastosowanie:: ${command.help.usage}`, {code: 'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'pomoc', 'hlep', 'commands', 'komendy'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Wyświetla wszystkie dostępne komendy dla twojego poziomu uprawnień.',
  usage: 'help [komenda]'
};
