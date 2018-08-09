const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    //message.channel.send('<:blobtickdeny:474749732317822986> Przepraszamy. Ta komenda jest w tej chwili niedostępna. Proszę poczekać aż zostanie zrobiona strona z dostępnymi komendami.')
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send(`= Lista komend =\n[Wpisz komendę ${config.prefix}help (nazwa komendy) dla szczegółów wybranej komendy. Wersja bota: 2.0.1]`, {code: 'asciidoc'});
    message.author.send(`${client.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'asciidoc'});
    message.channel.send('<:blobtickaccept:474749869727416333> Pomyślnie wysłano listę komend na PW!');
  }
  else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${config.prefix}${command.help.name} = \n${command.help.description}\nAliasy:: ${command.conf.aliases}\nZastosowanie:: ${command.help.usage}`, {code: 'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'pomoc', 'hlep', 'commands', 'komendy', 'helpme'],
  permLevel: 1
};

exports.help = {
  name: 'help',
  description: 'Wyświetla wszystkie dostępne komendy tego bota',
  usage: 'śo!help [nazwa komendy]'
};
