module.exports = (client, guild) => {
  client.channels.get(client.channels.find('name', 'general').id).send('Po chuj mnie tu dodałeś?! Ja tylko służę dla Czaciora!');
  console.log(`Dołączyłem do serwera ${guild.name}`);
  guild.leave();
}
