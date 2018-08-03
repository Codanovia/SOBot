exports.run = (client, message, params) => {
  var memeText = new Array();
  memeText[0] = 'taa kasme';
  memeText[1] = 'kest';
  memeText[2] = 'qiem';
  memeText[3] = 'wyjebame';
  memeText[4] = 'Chirwacja';
  memeText[5] = 'Chorwacj';
  memeText[6] = 'dupa pieprzyć';
  memeText[7] = 'HOLLY SHIT!!!!!!!!1111111111111111111111 TWENTY DOLLARS!!!!!!!!!!!!!!!!11111111111111111111111 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111111111111111111111111111111111';
  memeText[8] = '[BŁONT: Kutaf...]';
  memeText[10] = 'Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar Złote Euro Dolar';
  memeText[11] = 'Oof!';
  memeText[12] = 'SPORRRTOWA';
  memeText[14] = '<:E_:461532037405343756>';
  memeText[15] = 'YOLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO';
  memeText[16] = 'cisza';
  memeText[17] = 'dawać 3 sezon :star: :butterfly:';
  memeText[18] = 'Niech żyje Arstoczka!';
  memeText[19] = 'Wiadomość **Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość Wiadomość została usunięta została usunięta została usunięta została usunięta została usunięta została usunięta została usunięta została usunięta została usunięta została usunięta** została usunięta';
  memeText[20] = 'śo!ban @everyon za nic';
  memeText[21] = 'KRÓLICZEK MUSI WCIĄGAĆ PLAAAAACUUUUUUSIEEEE';
  memeText[22] = 'Ah koka kola, jaka pyszna';
  memeText[23] = 'Bisów nie będzie. Po reklamach';
  memeText[24] = 'CO MAM ZROBIĆ ŻEBYŚ MNIE NIE HEJTOWAŁ?';
  memeText[25] = 'KURŁA OENA';
  memeText[26] = 'GŁOWA W BETONIARCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
  memeText[27] = 'i cyk dwójeczka';
  memeText[28] = 'https://cdn.discordapp.com/attachments/461251813178343449/472128530088722432/a789fa959d8d89799dd392b5da036dbb.png';
  memeText[29] = 'HEINZ UP, BABY HEINZ UP';
  memeText[30] = 'geogeogeologie geogeogeologie geogeologie geologie geologie geogeologie';
  memeText[31] = 'KOCHAM SIĘ W EIP';
  memeText[32] = 'JADĘ DO SZKOŁY 400 M EIPEM';
  memeText[33] = 'JADĘ OD KRZESŁA DO KOMPA EIPEM';
  memeText[34] = 'Detention for you.';
  memeText[35] = 'GOTTA SWEEP SWEEP SWEEP';
  memeText[36] = 'nasram do telewizora';
  memeText[37] = 'zmienić muzykę w familiadzie bo tamta mi się znudziła';
  memeText[38] = 'zlikwidować ten dziennik telewizyjny';
  memeText[39] = 'dawać 3 sezon Star Butterfly';
  memeText[40] = 'Placki, placki, placki, placki, placki, dawać, królik, dawać, am, am, am!';
  memeText[41] = 'Srancja to chuje bo wygrały MŚ 2018';
  memeText[42] = 'memebers';
  memeText[43] = 'gimnazjam';
  memeText[44] = 'CO TU ROBICIE? Zbrodnicze życie';
  memeText[45] = ':regional_indicator_i::camera_with_flash::point_right::oncoming_police_car:';
  memeText[46] = 'Jak? Srak!';
  memeText[47] = 'Jaka? Sraka!';
  memeText[48] = 'Jaką? Sraką!';
  memeText[49] = 'Ale? Srale!';

  message.channel.send(memeText[Math.floor(Math.random()*memeText.length)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['text', 'mem', 'memy', 'meme', 'teksty'],
  permLevel: 1
};

exports.help = {
  name: "tekst",
  description: "Losuje jednego ze śmiesznych tekstów które są często używane na Świecie Oodrona",
  usage: "śo!tekst"
};
