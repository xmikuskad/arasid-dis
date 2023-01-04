// Require the necessary discord.js classes

const { Client, Events, GatewayIntentBits } = require("discord.js");
const {
  joinVoiceChannel,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  NoSubscriberBehavior,
  AudioPlayerStatus,
} = require("@discordjs/voice");

function getToken() {
  try {
    const { token } = require("./config.json");
    return token;
  } catch (ex) {
    return process.env.TOKEN;
  }
}

const tkn = getToken();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const player = createAudioPlayer({
  behaviors: {
    noSubscriber: NoSubscriberBehavior.Pause,
  },
});

let subscription = null;
let playing = false;
let timeout = null;
let connection = null;

player
  .on(AudioPlayerStatus.Idle, () => {
    playing = false;
    console.log("idle ", typeof connection);

    timeout = setTimeout(() => {
      connection.destroy();
    }, 300_000);
  })
  .on(AudioPlayerStatus.Playing, () => {
    playing = true;
    console.log("playinh ", typeof connection);
    if (timeout != null) clearTimeout(timeout);
  });

client.on(Events.MessageCreate, (message) => {
  let songId = 0;
  for (let i = 1; i < 107; i++) {
    if (message.content === i.toString()) {
      songId = i;
      break;
    }
  }

  if (songId === 0) return;
  console.log(message.channel.id);
  if (message.channel.id === "961000525254520932") return;
  if (message.content.startsWith(songId.toString())) {
    // const guild = message.client.guilds.cache.get(message.guildId);
    //const member = guild.members.cache.get(message.member.user.id);

    if (!client.voice.adapters.has(message.guild.id)) {
      console.log("JOINING CHANNEL");
      console.log("joining ", typeof connection);
      connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      })
        .on(VoiceConnectionStatus.Ready, () => {
          console.log(
            "The connection has entered the Ready state - ready to play audio!"
          );
          subscription = connection.subscribe(player);
        })
        .on(VoiceConnectionStatus.Disconnected, () => {
          console.log(subscription !== null);
          if (subscription !== null) subscription.unsubscribe();
        });
      console.log("joined ", typeof connection);
    }

    if (!playing) {
      const resource = createAudioResource("./sounds/" + songId + ".mp3");
      player.play(resource);
    }
  }
});

// Log in to Discord with your client's token
client.login(tkn);

//...Discord Bot Code Above ^^

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
