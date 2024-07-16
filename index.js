onst { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
client.login('token');

client.once('ready', () => console.log(client.user.tag+' 준비 완료!'));