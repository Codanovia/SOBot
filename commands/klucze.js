const keys = require('../keys.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!keys[message.author.id]) {
    keys[message.author.id] = {
      keys: 0
    };
  }

  if(!keys[pUser.id]) {
    keys[pUser.id] = {
      keys: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   keys[message.author.id] = {
     keys: Infinity
   };
 }

 let uKeys = keys[message.author.id].keys;
 let sKeys = keys[pUser.id].keys;
 if (message.mentions.users.size === 0) {
   message.channel.send(`W tej chwili masz ${uKeys} :key:`)
 }
 else if (message.mentions.users.size > 1) {
   message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz wymienić aż tak tylu użytkowników!');
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sKeys} :key:`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['keys'],
  permLevel: 0
};

exports.help = {
  name: "klucze",
  description: "Wyświetla liczbę posiadanych kluczy",
  usage: "śo!klucze [nazwa użytkownika]"
};
