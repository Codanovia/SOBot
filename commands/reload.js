exports.run = (client, message, params) => {
  let command;
  if (client.commands.has(params[0])) {
    command = params[0];
  } else if (client.aliases.has(params[0])) {
    command = client.aliases.get(params[0]);
  }
  if (!command) {
    return message.channel.send(`Nie mogę znaleźć komendy: ${params[0]}`);
  } else {
    message.channel.send(`Odświeżanie: ${command}`)
    .then(message => {
      client.reload(command)
      .then(() => {
        message.edit(`Pomyślnie odświeżono: ${command}`);
      })
      .catch(e => {
        message.edit(`Odświeżenie zakończono niepowodzeniem: ${command}\n\`\`\`${e.stack}\`\`\``);
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r"],
  permLevel: 4
};

exports.help = {
  name: "reload",
  description: "Odświeża plik komendy, jeśli został on zmieniony",
  usage: "cz!reload (nazwa komendy)"
};

exports.util = {
  name: "reload",
  description: "Odświeża plik komendy, jeśli został on zmieniony"
};
