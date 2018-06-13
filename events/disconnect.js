const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgBlue(`Rozłączyłeś się w dniu ${new Date()}`));
};
