  module.exports = (message, client) => {
  console.log(`Wiadomość \'${message.cleanContent}\' została usunięta z kanału ${message.channel}`);
};
