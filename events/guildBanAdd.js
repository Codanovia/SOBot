module.exports = (client, user) => {
  console.log(`Użytkownik ${user.username} został zbanowany.`);
  client.channels.get(client.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik **${user.username}** został zbanowany.`);
};
