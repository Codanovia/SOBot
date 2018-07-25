exports.run = async (client, msg, [choice, user]) => {
    if (!user) { user = client.user.id; }  
    var data = await client.funcs.userSearch(msg, {user: [null, user], name: this.help.name});
    
    if (data.valid === false) { return; }
    if (data.user[1].id === msg.author.id) { msg.channel.send("Nie możesz zagrać w Papier, Kamień, Nożyce ze samym sobą! Zaproś kogoś lub zagraj ze mną!"); }
        
    var types = ["kamień", "papier", "nożyce"];
    var hand = types[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(1) + 1)) + Math.ceil(1)];

    if ((choice === "kamień" && hand === "nożyce") || (choice === "papier" && hand === "kamień") || (choice === "nożyce" && hand === "papier")) { var result = `**${data.user[0].prefered} wygrało PKN!**`; } 
    else if ((choice === "kamień" && hand === "papier") || (choice === "papier" && hand === "nożyce") || (choice === "nożyce" && hand === "kamień")) { var result = `**${data.user[1].prefered} wygrało PKN!**`; }
    else { var result = "**Remis!**"; }

    msg.channel.send(`${data.user[0].prefered} wybrał ${choice}! ${data.user[1].prefered} wybrał ${hand}! ${result}`);
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rps', 'papier', 'kamień', 'nożyce'],
  permLevel: 1
};

exports.help = {
  name: "pkn",
  description: "Papier, Kamień, Nożyce!",
  usage: "cz!pkn"
};

exports.fun = {
  name: "pkn",
  description: "Papier, Kamień, Nożyce!",
};
