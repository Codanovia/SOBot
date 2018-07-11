const chalk = require('chalk');

module.exports = client => { // eslint-disable-line no-unused-vars
console.log(chalk.bgGreen('Witaj Czacior!\nWitaj Czacior!'));
while (client.user.presence.status = 'online') {
  client.user.setActivity('cz!help');
  setTimeout(120000);
  client.user.setActivity('cały serwer', {type: 'WATCHING'});
  setTimeout(120000);
}
};
