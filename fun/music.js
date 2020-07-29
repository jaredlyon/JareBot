module.exports = {
    name: 'music',
    permission: 1,
    main: function (bot, msg) {
        msg.channel.send({
            embed: {
                color: 0x006FC0,
                author: {
                    name: "Sean and Jared's Playlist",
                },
                title: "*Beatles, Pink Floyd, Creedance Clearwater Revival, U2, and many other oldies...*",
                url: "https://open.spotify.com/user/kingwaffleshnoz/playlist/6fq7AUznu5aq2ZSa6ScUb4?si=wq4_8XSeT26AEo_CaJXEqA",
                image: {
                    url: "https://i.imgur.com/3DTSjiC.jpg"
                },
                timestamp: new Date(),
                footer: {
                    icon_url: msg.guild.iconURL(),
                    text: msg.guild.name
                }
            }
        });

        msg.channel.send({
            embed: {
                color: 0x8392C9,
                author: {
                    name: "Chill? Kinda?",
                },
                title: "*A compilation of slow songs meant to calm the mood...*",
                url: "https://open.spotify.com/user/kingwaffleshnoz/playlist/16QGhhARynNriDad03r69W?si=8fR187_YSt6OgUc6CUiOkQ",
                image: {
                    url: "https://i.imgur.com/Ktz3JXT.jpg"
                },
                timestamp: new Date(),
                footer: {
                    icon_url: msg.guild.iconURL(),
                    text: msg.guild.name
                }
            }
        });

        /**
        msg.channel.send({
            embed: {
                color: 0x35BEAA,
                author: {
                    name: "Grandpa's 80th",
                },
                title: "*A reminiscient throwback to the good ol' days of music - or at least when it wasn't just mumbling to a triplet beat.*",
                url: "https://open.spotify.com/user/kingwaffleshnoz/playlist/04qmVZ78PURpAOevXc5gNO?si=H7AGcojPQ4iE7BQ4V7JhPg",
                image: {
                    url: "https://i.imgur.com/FQE69ZJ.jpg"
                },
                timestamp: new Date(),
                footer: {
                    icon_url: msg.guild.iconURL(),
                    text: msg.guild.name
                }
            }
        });

        msg.channel.send({
            embed: {
                color: 0xC08EFF,
                author: {
                    name: "Get Shlumped",
                },
                title: "*I'm not even gonna lie, this is literally just a playlist that the egg and I made...so, enjoy, I guess.*",
                url: "https://open.spotify.com/user/kingwaffleshnoz/playlist/2HxDbf2DNdRu6bIU0L7NZG?si=FFQTU0NlT7ytMEYN5UCqVQ",
                image: {
                    url: "https://i.imgur.com/sJglpQY.jpg"
                },
                timestamp: new Date(),
                footer: {
                    icon_url: msg.guild.iconURL(),
                    text: msg.guild.name
                }
            }
        });
        */

        msg.channel.send({
            embed: {
                color: 0x00000,
                author: {
                    name: "Hip Hop's Mic Drops",
                },
                title: "*Streets, suites, and beats.*",
                url: "https://open.spotify.com/playlist/6dQvG4RQxHF5nRPo8IK5yz?si=C1j-MRYTRvqPXAwKGoTpBQ",
                image: {
                    url: "https://i.imgur.com/ACFTokV.jpg"
                },
                timestamp: new Date(),
                footer: {
                    icon_url: msg.guild.iconURL(),
                    text: msg.guild.name
                }
            }
        });
    }
};