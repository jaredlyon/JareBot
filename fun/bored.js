module.exports = {
    name: 'bored',
    permission: 1,
    main: function (bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Here's a comprehensive list of all the random web games we could find for you:",
              icon_url: bot.user.avatarURL
            },
            description: "*Or maybe you'd rather listen to music? Type `j!music` into the chat for a few playlists by Jared.*",
            fields: [{
                name: "The Circle Game",
                value: "Okay, it's not about not looking at your friend Rod's weird hand motion, this one is actually pretty cool. You're tasked with an [agario-esque mission](http://circle-game.sysach.com/) to avoid the bigger asteroids whilst swallowing the smaller ones."
              }, 
              {
                name: "Nicky Case",
                value: "This [website](http://ncase.me/) contains a compilation of some cool flash games with social commentary by this guy named Nicky Case, there's even one about coming out. Idk, maybe you'd enjoy it."
              },
              {
                name: "arcadeprehacks.com",
                value: "Literally [EVERY classic flash game](http://www.arcadeprehacks.com/) (+ more) but with the option of using hacks to mess around! I particularly like [Pixel Legions](http://www.arcadeprehacks.com/game/4254/Pixel-Legions.html), [Stick War](http://www.arcadeprehacks.com/game/1210/Stick-Wars.html), and [Stick War 2](http://www.arcadeprehacks.com/game/22054/stick-war-2.html)."
              },
              {
                name: "flipline.com",
                value: "Another [hub](http://www.flipline.com/) for flash games (but with no hacks). I'm not sure why, but [Papa's Freezeria](http://www.flipline.com/games/papasfreezeria/index.html) particularly entertained me for a good while. Additionally, [Jacksmith](http://www.flipline.com/games/jacksmith/index.html) caught the attention of a lot of my classmates for some odd reason."
              },
              {
                name: "crazygames.com",
                value: "This [website](https://www.crazygames.com/) lists a bunch more games that are on the higher end of the quality spectrum. Most notably, it contains a [list of all the .io games](https://www.crazygames.com/c/io)."
              },
              {
                name: "arcadegamesclassic.net",
                value: "An [website](http://arcadegamesclassic.net) that has fairly decent recreations of [Pacman](http://arcadegamesclassic.net/pacman/), [Donkey Kong](http://arcadegamesclassic.net/donkey-kong/), [Galaga](http://arcadegamesclassic.net/galaga/), and [Space Invaders](http://arcadegamesclassic.net/space-invaders/)."
              },
              {
                name: "Slope by Y8",
                value: "This [game](http://www.y8.com/games/slope) swept my high school in a matter of days and is really addicting for some reason. The goal is roll down a slope full of obstacles at a constantly increasing speed. The highest I've ever gotten is 63."
              },
              {
                name: "candybox2",
                value: "[This game](https://candybox2.github.io/) doesn't have your conventional look at all, but its aesthetic does feel rather novel, despite being the very epitome of minimalistic. Stick around with it for awhile, it gets really interesting really quickly..."
              },
              {
                name: "Slightly Annoying Traffic",
                value: "[This](https://jorbits.itch.io/traffic) is one of the more challenging games on here, you're tasked with the oversight of a quite busy intersection (plus a set of train tracks) wherein you must individually stop and start cars to avoid accidents."
              },
              {
                name: "2048",
                value: "This [simple, yet amusing game](https://gabrielecirulli.github.io/2048/) offers a unique challenge - to combine blocks in the effort of eventually reaching a block with a value of 2048. You start with just a value of two."
              },
              {
                name: "Qix",
                value: "This game, though not very well known, was an extremely popular retro game back in the 80's. Like all of its counterparts, [Qix](http://www.freewebarcade.com/game/qix/) is fairly hard to play; however, I still highly recommend it."
              },
              {
                name: "Tetris!",
                value: "One of my personal favorite [games](https://tetris.com/play-tetris), my high score is 100,949!"
              }
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner 2019"
            }
          }
        });
    }

}