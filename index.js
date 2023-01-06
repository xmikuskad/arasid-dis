const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//... Keepalive code Above ^^

// CONSTANTS
const DEBUG = process.env.DEBUG || true;
const tkn = getToken();

// Require the necessary discord.js classes
const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
  PresenceUpdateStatus,
} = require("discord.js");
const processMessage = require("./modules/processMessage");
const { SOUND_COUNT, processAudio } = require("./modules/processAudio");

function getToken() {
  try {
    const { token } = require("./config.json");
    return token;
  } catch (ex) {
    return process.env.TOKEN;
  }
}

// Create a new client instance
const client = new Client({
  presence: {
    activities: [
      {
        name: "to " + SOUND_COUNT + " 🔥 sounds",
        type: ActivityType.Listening,
      },
    ],
    status: PresenceUpdateStatus.Online,
  },
  intents: [
    GatewayIntentBits.GuildVoiceStates, // Needed to check bot voice state
    GatewayIntentBits.DirectMessages, // Useless?
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans, // Useless?
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Needed to process messages
  ],
});
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (DEBUG && message.channel.id !== "850778478797258815") {
    console.log("Debug true and wrong channel");
    return;
  }

  processMessage(message);
  processAudio(message, client);
});

// Log in to Discord with your client's token
client.login(tkn);
