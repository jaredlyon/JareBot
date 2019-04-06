var Discord = require('discord.js')

module.exports = {
    name: 'link2',
    permission: 2,
    main: function (bot, msg) {
        msg.channel.send("https://discord.gg/q2fCsNr")
    }
};