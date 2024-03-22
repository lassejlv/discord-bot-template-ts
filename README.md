## Discord Bot Template (TypeScript)

This template comes with build in support for MongoDB. It uses typescript and everything is already setup and ready to go.

### Features

- Slash-Commands Handler (using CommandKit)
- Event Handler (using CommandKit)
- MongoDB Support
- Command Cooldowns (soon)
- Build-in Docker support


And more in the future!

### How to use

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add your bot token and MongoDB connection string (check out `.env.example` for more info)
4. Run `npm run dev` to start the bot in development mode
5. Run `npm run build` to build the bot (uses rimraf to delete the dist folder)
6. Run `npm start` to start the bot in production mode