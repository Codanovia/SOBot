module.exports = (guild, user) => {
console.log(`Użytkownik ${user.username} został zbanowany.`);
guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik **${user.username}** został zbanowany.`);
};
