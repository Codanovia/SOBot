module.exports = (client, user) => {
console.log(`Użytkownik ${user.username} został zbanowany.`);
client.channels.get('461223372785844247').send(`Użytkownik **${user.username}** został zbanowany.`);
};
