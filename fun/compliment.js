module.exports = {
    name: "compliment",
    permission: 1,
    main: function(bot, msg) {
        var target = msg.mentions.users.array()[0];
        var arr1 = [`Have your arms gotten longer since I last saw you? It's a good look for you, ` + target + `!`,
                    `Your hair shines like well oiled spaghetti, ` + target + `.`,
                    `Your hair looks terrifically sharp today, maybe spend some time enjoying it, ` + target + `!`]
        var arr2 = [`have your arms gotten longer since I last saw you? It's a good look for you!`,
                    `your hair shines like well oiled spaghetti.`,
                    `your hair looks terrifically sharp today, maybe spend some time enjoying it!`]

        if (target != null) {
            msg.channel.send(arr1[Math.floor(Math.random() * arr1.length)]) 
        } else {
            msg.reply(arr2[Math.floor(Math.random() * arr2.length)])
        }
    }
}