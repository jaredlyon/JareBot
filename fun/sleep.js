module.exports = {
    name: "sleep",
    permission: 1,
    main: function(bot, msg) {
        var sleepee = msg.mentions.users.array()[0];
        var arr1 = [`Ahem, ` + sleepee + `, shouldn't you be asleep?`, `Go to sleep, ` + sleepee + `!`, `By the power vested in me, I banish thee to bed, ` + sleepee + `!`, `Hey, psst, ` + sleepee + `, you should sleep.`, `My guy, please go to bed, ` + sleepee + `.`, `If you don't go to bed now, you'll hate yourself in the morning. Trust me, I've been there. Go to sleep now, and reap the benefits tomorrow, ` + sleepee + `.`, `Your friend wants you to get a good night's rest, and I'm obligated by the voice of reason within us all to back them up on that request. Go to sleep, ` + sleepee + `.`]
        var arr2 = ["https://i.imgur.com/6tHfvIM.jpg", "https://imgur.com/UWsCIPL.jpg", "https://i.imgur.com/0jwZ3Cq.png", "https://i.imgur.com/yj3mRPd.gif", "https://i.imgur.com/QrNyh1u.png"]

        if (sleepee != null) {
            msg.channel.send(arr1[Math.floor(Math.random() * arr1.length)], {
                file: arr2[Math.floor(Math.random() * arr2.length)]});
        
        } else {
            msg.channel.send("You best be finding yourself a comfy spot in bed.", {
                file: arr2[Math.floor(Math.random() * arr2.length)]});
        }
    }
}