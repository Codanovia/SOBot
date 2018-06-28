module.exports = (client, user) => {
  console.log(`Użytkownik ${user.username} został odbanowany.`);
  client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik ${user} został odbanowany.`);
};
