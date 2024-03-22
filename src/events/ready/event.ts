import type { Client } from 'discord.js';
import { Logger } from 'term-logger';
 
export default function (client: Client<true>) {
    Logger.success(`Logged in as ${client.user?.tag}!`);
};