import { CommandKit } from 'commandkit';
import { Client, GatewayIntentBits } from 'discord.js';
import { connect, connection } from "mongoose";
import path from 'path';
import { Logger } from 'term-logger';

class BotClient extends Client {
    constructor() {
        super({
          intents: [
            GatewayIntentBits.Guilds,
            // Add more intents here as needed
          ],
        });
      }
    
      // login
      run() {
        return super.login(process.env.TOKEN);
      }

      commandkit(client: BotClient) {
        new CommandKit({
            client,
            commandsPath: path.join(__dirname, '../commands'),
            eventsPath: path.join(__dirname, '../events'),
            bulkRegister: true,
            skipBuiltInValidations: true,
        })
      }

      async mongoose() {
        await connect(process.env.MONGO_URL as string)

        if (connection.readyState === 1) {
          Logger.database(`Connected to MongoDB`)
        } else {
          Logger.error(`Failed to connect to MongoDB`)
        }
      }
}

export { BotClient };