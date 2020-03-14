module.exports = {
    name: 'votekick',
    permission: 2,
    main: async function (bot, msg) {
        if (msg.mentions.users.first()) {
            //grab target
            var mention = msg.mentions.users.first();
            var target = bot.users.get(mention.id);
            console.log(target.voiceChannel);

            //grab and insert reason
            var reason = msg.content.split(' ').splice(1).join(' ');
            if (reason === '') {
                reason = '(no reason given)'
            };

            //count votes
            var yes = 0;
            var no = 0;

            if (target.voiceChannel) {
                let vcCount = target.voiceChannel.members.size;
                console.log(vcCount);
                var threshold = Math.floor(vcCount/2);
                console.log(threshold);
                
                let vote = await msg.channel.send({
                    embed: {
                        color: 3447003,
                        title: msg.author + " wants to call a vote:",
                        description:
                            "Kick player: " +
                            target.username +
                            "?\n؜" +
                            "React 👍 to vote YES" +
                            "\n" + 
                            "React 👎 to vote NO",
                        footer: {
                            text: "Vote count:",
                        },
                        timestamp: new Date()
                    }
                })
                .then(async function (message) {
                    await message.react("👍")
                    await message.react("👎")
                    return message;
                });

                let filter = (reaction, user) =>
                (reaction.emoji.name === "👍" || reaction.emoji.name === "👎");

                //play table
                let collector = vote.createReactionCollector(filter, {
                    time: 1000 * 2 * 60
                });

                collector.on("collect", async messageReaction => {
                    if (messageReaction.emoji.name === "👍") {
                        yes++;
                    } else if (messageReaction.emoji.name === "👎") {
                        no++;
                    }
                });

                collector.on("end", async collected => {
                    if (timeout) {
                        if (yes >= threshold || yes > no) {
                            vote.edit({
                                embed: {
                                    color: 3447003,
                                    title: msg.author + " wants to call a vote:",
                                    description:
                                        "Kick player: " +
                                        target.username +
                                        "?\n؜" +
                                        "**Vote passed!**",
                                    footer: {
                                        text: "Vote count:",
                                    },
                                    timestamp: new Date()
                                }
                            });
                            target.setVoiceChannel(null)
                        } else if (yes <= threshold || yes <= no) {
                            vote.edit({
                                embed: {
                                    color: 3447003,
                                    title: msg.author + " wants to call a vote:",
                                    description:
                                        "Kick player: " +
                                        target.username +
                                        "?\n؜" +
                                        "**Vote failed!**",
                                    footer: {
                                        text: "Vote count:",
                                    },
                                    timestamp: new Date()
                                }
                            });
                        } else {
                            vote.edit({
                                embed: {
                                    color: 3447003,
                                    title: msg.author + " wants to call a vote:",
                                    description:
                                        "Kick player: " +
                                        target.username +
                                        "?\n؜" +
                                        "**Vote failed!**",
                                    footer: {
                                        text: "Vote count:",
                                    },
                                    timestamp: new Date()
                                }
                            });
                        }
                    }
                });
            } else if (!target.voiceChannel) {
                msg.reply("cannot kick a disconnected user!");
            } else {
                msg.reply("something went wrong!")
            }
        } else {
            msg.reply("mention someone!");
        }
    }
};