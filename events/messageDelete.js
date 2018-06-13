  module.exports = (message, client) => {
  //const guild = message.guild;
  console.log(`Wiadomość \'${message.cleanContent}\' została usunięta z kanału ${message.channel}`);
  /*guild.channels.get(guild.channels.find('name', 'general').id).send(`Wiadomość **${message.cleanContent}** została usunięta.`)
  .then(message => {
    message.delete(10000);
    return;
  });*/
};
