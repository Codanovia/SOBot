const coins = require('../coins.json');
const keys = require('../keys.json');
const diamonds = require('../diamonds.json');
const blackorbs = require('../blackorbs.json');
const config = require('../config.json');
const fs = require('fs');

exports.run = (client, message, params) => {
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 100
    };
  }
  if(!keys[message.author.id]) {
    keys[message.author.id] = {
      keys: 0
    };
  }
  if(!diamonds[message.author.id]) {
    diamonds[message.author.id] = {
      diamonds: 0
    };
  }
  if(!blackorbs[message.author.id]) {
    blackorbs[message.author.id] = {
      blackorbs: 0
    };
  }

  if (message.author.id === config.ownerID) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
   keys[message.author.id] = {
     keys: Infinity
   };
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID2) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
   keys[message.author.id] = {
     keys: Infinity
   };
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID3) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
   keys[message.author.id] = {
     keys: Infinity
   };
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

 if (message.author.id === config.ownerID4) {
   coins[message.author.id] = {
     coins: Infinity
   };
   diamonds[message.author.id] = {
     diamonds: Infinity
   };
   keys[message.author.id] = {
     keys: Infinity
   };
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

  let box = params.join(' ');
  var chance = Math.random();
  let sCoins = coins[message.author.id].coins;
  let sDiamonds = diamonds[message.author.id].diamonds;
  let sKeys = keys[message.author.id].keys;
  let sBlackorbs = blackorbs[message.author.id].blackorbs;

  if (box === 'zwykła') {
    if (sKeys < 1) return message.reply('nie masz wystarczającej liczby kluczy!');
    var gwiazdkiWZwykłej = new Array();
    gwiazdkiWZwykłej[0] = 100;
    gwiazdkiWZwykłej[1] = 250;
    gwiazdkiWZwykłej[2] = 300;
    gwiazdkiWZwykłej[3] = 500;
    gwiazdkiWZwykłej[4] = 750;
    gwiazdkiWZwykłej[5] = 1000;

    var diamentyWZwykłej = new Array();
    diamentyWZwykłej[0] = 25;
    diamentyWZwykłej[1] = 50;
    diamentyWZwykłej[2] = 75;
    diamentyWZwykłej[3] = 100;
    diamentyWZwykłej[4] = 250;
    diamentyWZwykłej[5] = 500;

    var kluczeWZwykłej = new Array();
    kluczeWZwykłej[0] = 1;
    kluczeWZwykłej[1] = 2;
    kluczeWZwykłej[2] = 3;
    kluczeWZwykłej[3] = 4;
    kluczeWZwykłej[4] = 5;

    var wynikiGwiazdki = gwiazdkiWZwykłej[Math.floor(Math.random()*gwiazdkiWZwykłej.length)];
    var wynikiKlucze = kluczeWZwykłej[Math.floor(Math.random()*kluczeWZwykłej.length)];
    var wynikiDiamenty = diamentyWZwykłej[Math.floor(Math.random()*diamentyWZwykłej.length)];

    if (chance < 0.5) {
      message.channel.send(`W skrzynii znaleziono ${wynikiGwiazdki} <:gwiazdka:424229903664414720>!`);
      coins[message.author.id] = {
        coins: sCoins + parseInt(wynikiGwiazdki)
      };
    }
    else if (chance < 0.8) {
      message.channel.send(`W skrzynii znaleziono ${wynikiGwiazdki} <:gwiazdka:424229903664414720> i ${wynikiKlucze} :key:!`);
      coins[message.author.id] = {
        coins: sCoins + parseInt(wynikiGwiazdki)
      };
      keys[message.author.id] = {
        keys: sKeys + parseInt(wynikiKlucze)
      };
    }
    else {
      message.channel.send(`W skrzynii znaleziono ${wynikiGwiazdki} <:gwiazdka:424229903664414720> i ${wynikiDiamenty} :large_blue_diamond:!`);
      coins[message.author.id] = {
        coins: sCoins + parseInt(wynikiGwiazdki)
      };
      diamonds[message.author.id] = {
        keys: sDiamonds + parseInt(wynikiDiamenty)
      };
    }

    keys[message.author.id] = {
      keys: sKeys - 1
    };
  }

  else if (box === 'większa') {
    if (sKeys < 5) return message.reply('nie masz wystarczającej liczby kluczy!');
  }

  else if (box === 'duża') {
    if (sKeys < 10) return message.reply('nie masz wystarczającej liczby kluczy!');
  }

  else if (box === 'ogromna') {
    if (sKeys < 20) return message.reply('nie masz wystarczającej liczby kluczy!');
  }

  else if (box === 'tajemnicza') {
    if (sKeys < 100) return message.reply('nie masz wystarczającej liczby kluczy!');
    if (sDiamonds < 100000) return message.reply('nie masz wystarczającej liczby diamentów!');
  }
  else return message.reply('wybrana skrzynia jest nieprawidłowa');
  fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
    if (err) console.error(err)
  });
  fs.writeFile('./keys.json', JSON.stringify(keys), (err) => {
    if (err) console.error(err)
  });
  fs.writeFile('./diamonds.json', JSON.stringify(diamonds), (err) => {
    if (err) console.error(err)
  });
  fs.writeFile('./blackorbs.json', JSON.stringify(blackorbs), (err) => {
    if (err) console.error(err)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['open'],
  permLevel: 1
};

exports.help = {
  name: "otwórz",
  description: "Otwiera wybraną skrzynię.",
  usage: "otwórz [numer skrzynii]"
};
