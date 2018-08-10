exports.run = (client, message, params) => {
  var lovePercentage = new Array();
  lovePercentage[0] = '0%! :sob:';
  lovePercentage[1] = '10%! :cry:';
  lovePercentage[2] = '20%! :frowning:';
  lovePercentage[3] = '30%! :neutral_face:';
  lovePercentage[4] = '40%! :thinking:';
  lovePercentage[5] = '50%! :slight_smile:';
  lovePercentage[6] = '60%! :wink:';
  lovePercentage[7] = '69%! :rofl:';
  lovePercentage[8] = '70%! :relieved:';
  lovePercentage[9] = '80%! :kissing_heart:';
  lovePercentage[10] = '90%! :kissing_closed_eyes:';
  lovePercentage[11] = '100%! :heart_eyes:';
  lovePercentage[12] = '200%! :couplekiss:';
  lovePercentage[13] = '-1%! :face_palm:';
  lovePercentage[14] = '-100%! <:E_:476121739882135562>';

  message.channel.send(`:heart: Wskaźnik miłości między **${params[0]}** a **${params[1]}** to **${lovePercentage[Math.floor(Math.random()*lovePercentage.length)]}**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['love'],
  permLevel: 1
};

exports.help = {
  name: "match",
  description: "Pokazuje wskaźnik miłości między danymi osobami lub rzeczami",
  usage: "śo!match (osoba/rzecz 1) (osoba/rzecz 2)"
};
