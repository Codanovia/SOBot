const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    //message.author.send(`= Lista komend =\n[Wpisz komendę ${config.prefix}help (nazwa komendy) dla szczegółów wybranej komendy. Wersja bota: 1.4.1]`, {code: 'asciidoc'});
    //message.author.send(`= Zabawa =\n\n${client.commands.map(c => `${config.prefix}${c.fun.name}${' '.repeat(longest - c.fun.name.length)} :: ${c.fun.description}`).join('\n')}`, {code: 'asciidoc'});
    //message.author.send(`= Moderacja =\n\n${client.commands.map(c => `${config.prefix}${c.moderation.name}${' '.repeat(longest - c.moderation.name.length)} :: ${c.moderation.description}`).join('\n')}`, {code: 'asciidoc'});
    //message.author.send(`= Waluty =\n\n${client.commands.map(c => `${config.prefix}${c.currency.name}${' '.repeat(longest - c.currency.name.length)} :: ${c.currency.description}`).join('\n')}`, {code: 'asciidoc'});
    //message.author.send(`= Inne =\n\n${client.commands.map(c => `${config.prefix}${c.util.name}${' '.repeat(longest - c.util.name.length)} :: ${c.util.description}`).join('\n')}`, {code: 'asciidoc'});
    //message.reply('lista komend została wysłana na PW!');
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
  permLevel: 1
};

exports.help = {
  name: 'help',
  description: 'Wyświetla wszystkie dostępne komendy tego bota',
  usage: 'cz!help [nazwa komendy]'
};

exports.util = {
  name: 'help',
  description: 'Wyświetla wszystkie dostępne komendy tego bota'
};
