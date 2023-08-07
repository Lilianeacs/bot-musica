import { ping } from "./Comandos/teste.js";
const prefix = "!";

const commands = {
    ping
};


export function GerenciarComandos(msg) {
    if (!msg.content.startsWith(prefix) || msg.author.bot)
        return;

    const args = msg.content.slice(prefix.length).split(/\s+/);
    const command = args.shift().toLowerCase();

    commands[command](msg, args);
}