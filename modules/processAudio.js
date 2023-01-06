const {
  joinVoiceChannel,
  VoiceConnectionStatus,
  createAudioResource,
  AudioPlayerStatus,
  createAudioPlayer,
  NoSubscriberBehavior,
} = require("@discordjs/voice");

let subscription = null;
let playing = false;
let timeout = null;
let connection = null;

const player = createAudioPlayer({
  behaviors: {
    noSubscriber: NoSubscriberBehavior.Pause,
  },
});

player
  .on(AudioPlayerStatus.Idle, () => {
    playing = false;

    timeout = setTimeout(() => {
      connection.destroy();
    }, 300_000);
  })
  .on(AudioPlayerStatus.Playing, () => {
    playing = true;
    if (timeout != null) clearTimeout(timeout);
  });

function processAudio(songId, message, client) {
  if (songId !== 0 && message.channel.id === "961000525254520932") {
    console.log("Trying to type in VIP room");
    message.delete();
    return;
  }

  if (songId !== 0 && message.content.startsWith(songId.toString())) {
    if (message.member.voice.channel === null) return;
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
}

module.exports = processAudio;
