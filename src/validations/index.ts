import type { ValidationProps } from 'commandkit';
import { CooldownSet } from '../structures/client';
 
export default async function ({ interaction }: ValidationProps) {
    if (!interaction.isCommand()) return;

    const maxTime = 5 * 1000; // The time a user will be on cooldown
    const key = `${interaction.user.id}-${interaction.commandName}`; // The key for the cooldown
    const message = `<@${interaction.user.id}>, you are on cooldown for cmd: \`${interaction.commandName}\`` // You can change the message to whatever you want
     


    // Check if the user is on cooldown
    if (CooldownSet.has(key)) {
      await interaction.reply({ content: message, ephemeral: true });

      return true;
    } else {
        // Add cooldown
        CooldownSet.add(key);

        setTimeout(() => {
            // Remove cooldown
            CooldownSet.delete(key);
        }, maxTime);
    }
};