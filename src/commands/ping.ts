import { SlashCommandProps } from "commandkit";
import { SlashCommandBuilder } from "discord.js";



export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

export async function run({ interaction }: SlashCommandProps) {
    await interaction.reply('Pong!');
}