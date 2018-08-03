const diamonds = require('../diamonds.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
      diamonds: 0
    };
  }

  if(!diamonds[pUser.id]) {
    diamonds[pUser.id] = {
      diamonds: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
 }

 let uDiamonds = diamonds[message.author.id].diamonds;
 let sDiamonds = diamonds[pUser.id].diamonds;
 if (message.mentions.users.size === 0) {
   message.channel.send(`W tej chwili masz ${uDiamonds} :large_blue_diamond:`)
 }
 else if (message.mentions.users.size > 1) {
   message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz wymienić aż tak tylu użytkowników!');
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sDiamonds} :large_blue_diamond:`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['diamonds'],
  permLevel: 0
};

exports.help = {
  name: "diamenty",
  description: "Wyświetla liczbę posiadanych diamentów",
  usage: "śo!diamenty [nazwa użytkownika]"
};
