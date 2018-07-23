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

  if (message.author.id === config.ownerID) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID5) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 if (message.author.id === config.ownerID6) {
   coins[message.author.id] = {
     coins: Infinity
   };
 }

 let uCoins = coins[message.author.id].coins;
 let sCoins = coins[pUser.id].coins;
 if (message.mentions.users.size < 1) {
   message.channel.send(`W tej chwili masz ${uCoins} <:gwiazdka:424229903664414720>`)
 }
 else if (message.mentions.users.size > 1) {
   message.channel.send('Nie możesz wymienić aż tak tylu użytkowników!');
 }
 else {
   message.channel.send(`Ten użytkownik ma ${sCoins} <:gwiazdka:424229903664414720>`);
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
  usage: "cz!gwiazdki [nazwa użytkownika]"
};

exports.currency = {
  name: "gwiazdki",
  description: "Wyświetla liczbę posiadanych gwiazdek"
};
