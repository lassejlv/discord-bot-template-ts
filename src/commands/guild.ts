import { SlashCommandProps } from "commandkit";
import { SlashCommandBuilder} from "discord.js";
import Guild from "@/schemas/Guild";




export const data = new SlashCommandBuilder()
    .setName('guild')
    .setDescription('Replies with Guild infomation!');

export async function run({ interaction }: SlashCommandProps) {
    await interaction.deferReply();

    const guildData = await Guild.findOne({ guild_id: interaction.guildId as string });
    
    if (!guildData) {
        return interaction.editReply('Guild not found in database');
    } else {
        return interaction.editReply(`Guild ID: ${guildData.guild_id}`);
    }
}