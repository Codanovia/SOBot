const coins = require('../coins.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }

  if(!coins[pUser.id]) {
    coins[pUser.id] = {
      coins: 100
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 let uCoins = coins[message.author.id].coins;
 let sCoins = coins[pUser.id].coins;
 if (message.mentions.users.size === 0) {
   message.channel.send(`W tej chwili masz ${uCoins} <:gwiazdka:473872654294843393>`)
 }
 else if (message.mentions.users.size > 1) {
   message.channel.send('<:blobtickdeny:474749732317822986> Nie możesz wymienić aż tak tylu użytkowników!');
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sCoins} <:gwiazdka:473872654294843393>`);
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['stars'],
  permLevel: 0
};

exports.help = {
  name: "gwiazdki",
  description: "Wyświetla liczbę posiadanych gwiazdek",
  usage: "śo!gwiazdki [nazwa użytkownika]"
};
