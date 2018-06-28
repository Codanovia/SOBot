module.exports = (client, guild) => {
  client.channels.get(client.channels.find('name', 'general').id).send('Po coś mnie tu dodał! Ja tylko służę dla Czaciora!');
  console.log(`Dołączyłem do serwera ${guild.name}`);
}
