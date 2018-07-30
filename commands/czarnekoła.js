const blackorbs = require('../blackorbs.json');
const config = require('../config.json');

exports.run = (client, message, params) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(params[0]);

  if(!blackorbs[message.author.id]) {
    blackorbs[message.author.id] = {
      blackorbs: 0
    };
  }

  if(!blackorbs[pUser.id]) {
    blackorbs[pUser.id] = {
      blackorbs: 0
    };
  }

  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) {
   blackorbs[message.author.id] = {
     blackorbs: Infinity
   };
 }

  let uBlackorbs = blackorbs[message.author.id].blackorbs;
  let sBlackorbs = blackorbs[pUser.id].blackorbs;
  if (message.mentions.users.size === 0) {
    message.channel.send(`W tej chwili masz ${uBlackorbs} :black_circle:`)
  }
  else if (message.mentions.users.size > 1) {
    message.channel.send('Nie możesz wymienić aż tak tylu użytkowników!');
  }
  else {
    message.channel.send(`Ten użytkownik ma ${sBlackorbs} :black_circle:`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['czarnekule', 'blackcircles', 'blackorbs'],
  permLevel: 0
};

exports.help = {
  name: "czarnekoła",
  description: "Wyświetla liczbę posiadanych czarnych kół",
  usage: "cz!czarnekoła [nazwa użytkownika]"
};

exports.currency = {
  name: "czarnekoła",
  description: "Wyświetla liczbę posiadanych czarnych kół"
};
