  module.exports = message => {
  console.log(`Wiadomość ${message.cleanContent} użytkownika ${message.author} została usunięta z kanału ${message.channel}`);
};
