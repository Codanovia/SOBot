var weather = require('weather-js');
exports.run = (client, message, params) => {
  weather.find({search: params[0], degreeType: "C"}, function(err, result) {
    if (err) message.channel.send(err);

   var current = result[0].current;
   var location = result[0].location;

   const embed = new Discord.RichEmbed()
   .setDescription(`**${current.skytext}**`)
   .setAuthor(`Pogoda dla ${current.observationpoint}`)
   .setThumbnail(current.imageUrl)
   .setColor(0x009fff)
   .addField(`Strefa czasowa`, `UTC${location.timezone}`, true)
   .addField(`Temperatura`, `${current.temperature} ℃`, true)
   .addField(`Odczuwalna Temperatura`, `${current.feelslike} ℃`, true)
   .addField(`Wiatry`,current.winddisplay, true)
   .addField(`Wilgotność`, `${current.humidity}%`, true)

   message.channel.send({embed})
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "pogoda",
  description: "Pokazuje pogodę",
  usage: "śo!pogoda (miejscowość/miasto)"
};
