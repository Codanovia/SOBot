const rubies = require('../rubies.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!rubies[message.author.id]) {
    rubies[message.author.id] = {
      rubies: 0
    };
  }

  if(!rubies[pUser.id]) {
    rubies[pUser.id] = {
      rubies: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   rubies[message.author.id] = {
     rubies: Infinity
   };
 }

 let uRubies = rubies[message.author.id].rubies;
 let sRubies = rubies[pUser.id].rubies;
 if (message.mentions.users.size === 0) {
   message.channel.send(`W tej chwili masz ${uRubies} :diamonds:`)
 }
 else if (message.mentions.users.size > 1) {
   message.channel.send('Nie możesz wymienić aż tak tylu użytkowników!');
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sRubies} :diamonds:`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rubies'],
  permLevel: 0
};

exports.help = {
  name: "rubiny",
  description: "Wyświetla liczbę posiadanych rubinów",
  usage: "cz!rubiny [nazwa użytkownika]"
};

exports.currency = {
  name: "rubiny",
  description: "Wyświetla liczbę posiadanych rubinów"
};
