module.exports = {
  name: 'rules',
  permission: 1,
  main: function (bot, msg) {
    msg.channel.send({
      embed:
      {
        color: 3447003,
        author: {
          name: "Server Rules",
          url: "https://i.imgur.com/5HLaLyc.png",
          icon_url: msg.guild.iconURL()
        },
        fields: [
          {
            name: "1. Be respectful.",
            value: "Maintain a positive attitude, respect boundaries, and don't be overly combative. In that same regard, speech considered hateful or otherwise unhealthy for the server's atmosphere is heavily subjective; consequently, speech that you find appropriate may not always be appreciated by your peers. With this in mind, please be conscious of how your words might affect those around you."
          },
          {
            name: "2. Follow all text and voice channel guidelines.",
            value: "When utilizing text channels, please use the appropriate text channels in accordance with their respective topics, confine all bot commands to #bot-console, and do not post any nsfw content. Spam is not tolerated, including excessive advertising as well as the usage of distorted or needlessly loud noise in voice channels."
          },
          {
            name: "3. Do not spread disinformation.",
            value: "The deliberate dissemination of disinformation will result in immediate removal from the server. Specifically, dissemination of disinformation includes, but is not limited to, any conduct with intent to convey false or misleading information as fact under circumstances where such information may reasonably be believed."
          }
        ]
      }
    });
    msg.channel.send("https://discord.gg/q2fCsNr");
  }
}