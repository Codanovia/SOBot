const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    message.channel.send('<#477842952862040064>');
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
