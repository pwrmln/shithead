const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', async () => {
    require(`${__dirname}/webserver`)(client);
    client.chn = client.guilds.cache.get('829728636113256470').channels.cache.get('829728636563095623');
});

client.login('ODQwNjA1MTk5NjA1NTYzNDAy.YJaomQ.DUcxfziD3cFTAus9eNHgL2_JWl4');