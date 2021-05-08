const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', async () => {
    // eslint-disable-next-line no-undef
    require(`${__dirname}/webserver`)(client);
    client.chn = client.guilds.cache.get('829728636113256470').channels.cache.get('829728636563095623');
});

client.login(require('./token').toString());