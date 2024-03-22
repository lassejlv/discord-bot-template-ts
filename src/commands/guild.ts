import { SlashCommandProps } from "commandkit";
import { SlashCommandBuilder} from "discord.js";
import Guild from "../schemas/Guild";




export const data = new SlashCommandBuilder()
    .setName('guild')
    .setDescription('Replies with Guild infomation!');

export async function run({ interaction }: SlashCommandProps) {

    const guildData = await Guild.findOne({ guild_id: interaction.guildId as string });
    
    if (!guildData) {
        return interaction.reply('Guild not found in database');
    } else {
        return interaction.reply(`Guild ID: ${guildData.guild_id}`);
    }
}