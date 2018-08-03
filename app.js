const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Witaj, świecie Oodrona!\n");
});
server.listen(3000);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Ładowanie ${files.length} komend.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Załadowano komendę: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permLevel = 1;
  const banned_role = message.guild.roles.find('name', config.bannedRoleName);
  if (banned_role && message.member.roles.has(banned_role.id)) permLevel = 0;
  const mod_role = message.guild.roles.find('name', config.modRoleName);
  if (mod_role && message.member.roles.has(mod_role.id)) permLevel = 2;
  const mod_role2 = message.guild.roles.find('name', config.modRoleName2);
  if (mod_role2 && message.member.roles.has(mod_role2.id)) permLevel = 2;
  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) permLevel = 3;
  return permLevel;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('debug', e => {
  console.log(e.replace(regToken, 'that was redacted'));
});

client.on('warn', e => {
  console.log(e.replace(regToken, 'that was redacted'));
});

client.on('error', e => {
  console.log(e.replace(regToken, 'that was redacted'));
});

client.login(config.token);
