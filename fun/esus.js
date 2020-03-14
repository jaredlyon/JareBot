module.exports = {
    name: "esus",
    permission: 1,
    main: function(bot, msg) {
        var congregation = msg.mentions.users.array()[0];
        var arr1 = ["https://i.imgur.com/tqoF0gI.png"]

        if (congregation != null) {
            msg.channel.send("Jesus blesses you, " + congregation.username + ".\n" + arr1[Math.floor(Math.random() * arr1.length)])
        } else {
            msg.channel.send(`Jesus blesses you.\n` + arr1[Math.floor(Math.random() * arr1.length)])
        }
    }
}