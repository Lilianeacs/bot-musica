import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { GerenciarComandos } from "./gerenciadorComando.js";
dotenv.config();

const client = new Client({
  intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", GerenciarComandos);

client.login(process.env.DISCORD_TOKEN);