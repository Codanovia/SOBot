const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Witaj Czacior!\n");
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

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

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
  const admin_role = message.guild.roles.find('name', config.adminRoleName);
  if (admin_role && message.member.roles.has(admin_role.id)) permLevel = 3;
  const admin_role2 = message.guild.roles.find('name', config.adminRoleName2);
  if (admin_role2 && message.member.roles.has(admin_role2.id)) permLevel = 3;
  const admin_role3 = message.guild.roles.find('name', config.adminRoleName3);
  if (admin_role3 && message.member.roles.has(admin_role3.id)) permLevel = 3;
  const admin_role4 = message.guild.roles.find('name', config.adminRoleName4);
  if (admin_role4 && message.member.roles.has(admin_role4.id)) permLevel = 3;
  const admin_role5 = message.guild.roles.find('name', config.adminRoleName5);
  if (admin_role5 && message.member.roles.has(admin_role5.id)) permLevel = 3;
  const admin_role6 = message.guild.roles.find('name', config.adminRoleName6);
  if (admin_role6 && message.member.roles.has(admin_role6.id)) permLevel = 3;
  const admin_role7 = message.guild.roles.find('name', config.adminRoleName7);
  if (admin_role7 && message.member.roles.has(admin_role7.id)) permLevel = 3;
  const admin_role8 = message.guild.roles.find('name', config.adminRoleName8);
  if (admin_role8 && message.member.roles.has(admin_role8.id)) permLevel = 3;
  const owner_role = message.guild.roles.find('name', config.ownerRoleName);
  if (owner_role && message.member.roles.has(owner_role.id)) permLevel = 4;
  return permLevel;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('debug', e => {
  console.log(chalk.bgBlue(e.replace(regToken, 'that was redacted')));
});

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(config.token);
