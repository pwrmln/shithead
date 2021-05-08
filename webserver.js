const express = require('express');
const parser = require("body-parser");
const Discord = require('discord.js');
const web = express();

module.exports = async (client) => {

    web.use(express.static(__dirname + '/web/assets'));
    web.use(parser.json({extended : true}));
    web.use(parser.urlencoded({ extended: true })); 

    web.get('/announcement', (req, res) => {
        res.sendFile(`${__dirname}/web/announcement.html`)
    })

    web.get('/', (req, res) => {

        var resp =
`<head>
    <title>Shithead Security Frontend</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>

<body>
    <h1>Shithead Security Frontend</h1>
    <h2>Ping</h2>
    <p>${client.ws.ping}ms</p>
    <h2>Logged in as:</h2>
    <p>${client.user.tag} <i>(${client.user.id})</i></p>
</body>`

        res.send(resp)

    });

    web.post("/announce", async (req, res) => {
        var resp = req.body;
        if (resp.announcement) {
            client.chn.send(
                new Discord.MessageEmbed().setColor("RED").setTitle("Announcement")
                .setDescription(resp.announcement).setTimestamp() 
            );
        }
        else console.log("Epic code fail");
        res.send("<h1>All done!</h1><h2>Sent in chat:</h2><p>" + resp.announcement + "</p>");

    });

    web.listen(80);

};

