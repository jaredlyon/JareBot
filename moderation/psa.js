module.exports = {
    name: 'psa',
    permission: 2,
    main: function(bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Public Service Announcement",
              icon_url: msg.guild.iconURL
            },
            description: "*Just a short PSA from your friendly neighborhood Jared!*",
            fields: [{
              name: "Violations of the Safe Space",
              value: "Recently, it's come to my attention that messages & conversations have begun to be screenshotted and distributed outside of this channel. While this normally may not be an issue in other public channels, it is not, under any circumstances, an acceptable practice in this channel - the reason being that this channel is a **safe space**. More specifically, people come here to talk about what's on their mind so that they may find the help & support that they need; moreover, that includes the right to admit past mistakes and find ways to remedy them. Even if they admit faults, mistakes, or other lapses in judgement, they still come here in order to find solutions for those problems, whether they be on the inside or the outside. Taking their words outside of this **safe space**, regardless of the purpose, is an insult to the sanctity of the channel."
            },
            {
              name: "A Few Cases",
              value: "Since the inception of this channel, a small faction of individuals who are here simply to 'read the drama' has existed. However, it's come to my attention that certain individuals have been taking other members' words out of this channel for the purpose of pushing a personal agenda or shaming them. I just want you to know that, while doing this may make you a moral hero in other channels, it's outright counterproductive to do it here. Like I've said, people come to this channel to seek help & support, and robbing them of the ability to do so without judgement literally hinders their progress on their journey towards change. Shaming someone for admitting mistakes in this channel doesn't make you a hero, it makes you a fucking asshole."
            },
            {
              name: "A Warning",
              value: "I only include this section so that it is easier for myself and others to directly quote: if I am presented with reasonable cause to believe that an individual has been screenshotting, quoting, or otherwise 'leaking' messages from this channel without written permission from the message authors, they will be banned from the server."
            }],
            timestamp: new Date(),
            footer: {
              text: "© JL's Diner™ 2019"
            }
          }
        });
      msg.delete();
    }
};