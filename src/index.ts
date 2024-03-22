import "dotenv/config"
import { BotClient } from "./structures/client"

const bot = new BotClient()



bot.run()
bot.mongoose()
bot.commandkit(bot)