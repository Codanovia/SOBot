exports.run = (client, message, params) => {
  var ogar = new Array();
  ogar[0] = 'https://cdn.discordapp.com/attachments/422082830085128233/459828007113195530/ogar_1.png';
  ogar[1] = 'https://cdn.discordapp.com/attachments/422082830085128233/459694325979283468/ogar.png';
  ogar[2] = 'https://cdn.discordapp.com/attachments/422082830085128233/456126905746456597/tele.png';
  ogar[3] = 'https://cdn.discordapp.com/attachments/422082830085128233/460823813899288577/karabin_2.png';
  ogar[4] = 'https://cdn.discordapp.com/attachments/461251813178343449/461622452301332490/zartysieskonczyly.png';
  ogar[5] = 'https://cdn.discordapp.com/attachments/461251813178343449/461625432840863744/unknown.png';
  ogar[6] = 'https://cdn.discordapp.com/attachments/461251813178343449/462329323328634910/ogar6.jpg';
  ogar[7] = 'https://cdn.discordapp.com/attachments/461251813178343449/462733445706022912/ogar.png';
  ogar[8] = 'https://cdn.discordapp.com/attachments/461251813178343449/462734057189408768/unknown.png';
  ogar[9] = 'https://cdn.discordapp.com/attachments/461251813178343449/462735607735648267/unknown.png';
  ogar[10] = 'https://cdn.discordapp.com/attachments/461251813178343449/462736335967354883/unknown.png';
  ogar[11] = 'https://cdn.discordapp.com/attachments/461251813178343449/462736997262426112/unknown.png';
  ogar[12] = 'https://cdn.discordapp.com/attachments/461251813178343449/462737230511996928/unknown.png';
  ogar[13] = 'https://cdn.discordapp.com/attachments/461251813178343449/462737484489687040/unknown.png';
  ogar[14] = 'https://cdn.discordapp.com/attachments/461251813178343449/462737715943833600/unknown.png';
  ogar[15] = 'https://cdn.discordapp.com/attachments/461251813178343449/462737920856424449/unknown.png';
  ogar[16] = 'https://cdn.discordapp.com/attachments/461251813178343449/462738078633689088/unknown.png';
  ogar[17] = 'https://cdn.discordapp.com/attachments/461251813178343449/462738363133329408/unknown.png';
  ogar[18] = 'https://cdn.discordapp.com/attachments/461251813178343449/462738496554139658/unknown.png';
  ogar[19] = 'https://cdn.discordapp.com/attachments/461251813178343449/462738715853193226/unknown.png';
  ogar[20] = 'https://cdn.discordapp.com/attachments/461251813178343449/462739789464993823/unknown.png';
  ogar[21] = 'https://cdn.discordapp.com/attachments/461251813178343449/462740321336295444/unknown.png';
  ogar[22] = 'https://cdn.discordapp.com/attachments/461251813178343449/462879335544782848/unknown.png';
  ogar[23] = 'https://cdn.discordapp.com/attachments/461251813178343449/462879943609810954/ogar_2.png';
  ogar[24] = 'https://cdn.discordapp.com/attachments/461251813178343449/462939066086850570/hotdog.png';
  ogar[25] = 'https://cdn.discordapp.com/attachments/461251813178343449/462939398875381762/unknown.png';
  ogar[26] = 'https://cdn.discordapp.com/attachments/461251813178343449/462939563245961216/unknown.png';
  ogar[27] = 'https://cdn.discordapp.com/attachments/461251813178343449/462939755311661056/unknown.png';
  ogar[28] = 'https://cdn.discordapp.com/attachments/461251813178343449/462940037512691725/unknown.png';
  ogar[29] = 'https://cdn.discordapp.com/attachments/461251813178343449/462940193725612042/unknown.png';
  ogar[30] = 'https://cdn.discordapp.com/attachments/461251813178343449/462940375783309322/unknown.png';
  ogar[31] = 'https://cdn.discordapp.com/attachments/461251813178343449/462942441914236938/d-penguin-next-to-stop-sign-render-46022425.png';
  ogar[32] = 'https://cdn.discordapp.com/attachments/461251813178343449/462990227087294464/unknown.png';
  ogar[33] = 'https://cdn.discordapp.com/attachments/461251813178343449/462990735092744192/ogar.jpg';
  ogar[34] = 'https://cdn.discordapp.com/attachments/461251813178343449/462991745760755723/WAGARY.png';
  ogar[35] = 'https://cdn.discordapp.com/attachments/461251813178343449/463061380397006849/ogar.png';
  ogar[36] = 'https://cdn.discordapp.com/attachments/461251813178343449/463039988142178314/ogar.png';

  message.channel.send(ogar[Math.floor(Math.random()*ogar.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "ogar",
  description: "Wysyła losową osobę, żeby ogarnęła czat",
  usage: "ogar"
};
