exports.run = (client, message, params) => {
  var cap = new Array();
  cap[0] = 'Capa';
  cap[1] = 'Mixona';
  cap[2] = 'Capa';
  cap[3] = 'Mixona';

  var hate = new Array();
  hate[0] = 'Windows 10';
  hate[1] = 'Microsoft Edge';
  hate[2] = 'Windows 10';
  hate[3] = 'Microsoft Edge';;

  var yorin = new Array();
  yorin[0] = 'Yorin';
  yorin[1] = 'Veronica';
  yorin[2] = 'RTL7';

  var leave = new Array();
  leave[0] = 'Chatango';
  leave[1] = 'Discord';
  leave[2] = 'Chatango';
  leave[3] = 'Discord';

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
  memeText[14] = '<:E_:476121739882135562>';
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
  memeText[36] = 'Nasram do telewizora i na jedno wyjdzie';
  memeText[37] = 'zmienić muzykę w familiadzie bo tamta mi się znudziła';
  memeText[38] = 'zlikwidować ten dziennik telewizyjny';
  memeText[39] = 'dawać 3 sezon Star Butterfly';
  memeText[40] = 'Placki, placki, placki, placki, placki, dawać, królik, dawać, am, am, am!';
  memeText[41] = 'Srancja to chuje bo wygrały MŚ 2018';
  memeText[42] = 'memebers';
  memeText[43] = 'gimnazjam';
  memeText[44] = 'CO TU ROBICIE?\nZbrodnicze życie';
  memeText[45] = ':regional_indicator_i::camera_with_flash::point_right::oncoming_police_car:';
  memeText[46] = 'Jak? Srak!';
  memeText[47] = 'Jaka? Sraka!';
  memeText[48] = 'Jaką? Sraką!';
  memeText[49] = 'Ale? Srale!';
  memeText[50] = 'https://cdn.discordapp.com/attachments/422082830085128233/459828007113195530/ogar_1.png';
  memeText[51] = 'HAJNZ AP, BEJBI HAJNZ UP';
  memeText[52] = 'chuje mokre';
  memeText[53] = 'Bajka kuba0303';
  memeText[54] = 'Poof ile razy mamusia powtarzała nie macaj';
  memeText[55] = 'Głupie pytanie';
  memeText[56] = 'FakTy';
  memeText[57] = 'Pytanie Za 5000 Zł: Kiedy Powstał Alex Top';
  memeText[58] = `IDĘ PO ${cap[Math.floor(Math.random()*cap.length)].toUpperCase()}`;
  memeText[59] = 'Czy Mogę Się Połączyć z Tobą Na Skype?';
  memeText[60] = `Jebać ${hate[Math.floor(Math.random()*hate.length)]}`;
  memeText[61] = 'Legginsy są dłuższe niż Warszawa';
  memeText[62] = 'Aha, dostałem długie rogi Penny?';
  memeText[63] = `Ej ty, wypierdalaj, nie lubię ${yorin[Math.floor(Math.random()*yorin.length)]}`;
  memeText[64] = 'No kurwa spadam';
  memeText[65] = 'MOJE MIASTO TO BIAŁYSTOCK... A MOJE RZYGI TO BIAŁYSTOCK...';
  memeText[66] = 'Foch';
  memeText[67] = 'Sex sex sex porno porno porno Windows windows windows';
  memeText[68] = 'Chcesz sformatować 134chan (o którym i tak YaYa się dowie)?';
  memeText[69] = 'Ballad';
  memeText[70] = 'HP DP';
  memeText[71] = 'Kurwa. Gdzie? W dupie. Twojej Starej, która chce zjeść pączka, ale go nie zjadła, ponieważ krztusiła się i zmarła. Pogrzeb [*]';
  memeText[72] = 'Podszywka';
  memeText[73] = 'KÓP TERAZ W MIKS ELEKTRONIKS LAPTOP DP HP ZA PIERDÓLIARD DOLARUW';
  memeText[74] = 'SRINDOWS 10';
  memeText[75] = 'Morda na YouTube';
  memeText[76] = 'Nieja';
  memeText[77] = 'TVNFilmy to TV9. Gruby pedał';
  memeText[78] = 'Najepsze';
  memeText[79] = 'Non';
  memeText[80] = 'Serwer LPL to Korea Północna, LPL to Kim Dzong Un';
  memeText[81] = 'NaNi?!';
  memeText[82] = 'Najbardziej mi się nie podoba to że RobTop ocenia jakieś śmieciowe etapy z high detailem';
  memeText[83] = 'ciągle tylko hola hola vamos vamos i jakieś frhqaesifbewhuufhvbfeweijvbfeiodf';
  memeText[84] = 'ale ja muszę żyć w takim zjebanym kraju jak Polska w którym ciągle tylko pierdolą Polska Polska Polska w GD';
  memeText[85] = 'O JEZU NASRAŁEM KURWA DO MUSIKALLI DLATEGO ZMIENIAJĄ WIZERUNEK HAHAAHHA HDDHHSIFOADBFONDVIOAVNAPVAPOVMPOASDPO';
  memeText[86] = 'CZEMU AKURAT KURWA PADAM ZAWSZE NA 95%-99%';
  memeText[87] = 'obudzę się w nocy i pojadę autobusem nocnym do Warszawy, wyjebane mam';
  memeText[88] = 'Wiecie że mamy trzy polski? Polska, Wielkopolska i Małopolska';
  memeText[89] = 'Oglądam profile GD\nPatrzę: wiadomości z językiem hiszpańskim\nReakcja: FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU';
  memeText[90] = 'Na Czaciorze ponoć 99% to były posty z Radia Polska Muzyka. Tutaj (Świat Oodrona) max. 10%';
  memeText[91] = 'Ogar';
  memeText[92] = 'Ale Kubuś Play to picie';

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
