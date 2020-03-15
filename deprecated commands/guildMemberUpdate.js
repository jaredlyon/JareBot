var Discord = require('discord.js');

var arr1 = ["x"];
var arr2 = ["y"]
var arr3 = [null]

exports.run = (bot, oldMember, newMember) => {
    if (oldMember.id == "given" && oldMember.nickname != newMember.nickname && arr3.indexOf(newMember.nickname) < 0) {
        newMember.setNickname(arr3[Math.floor(Math.random() * arr3.length)])
        var channel = newMember.guild.channels.fetch("gen")
        //channel.send("Bjorn but with a Ch wouldn't want you to change you name, Chenjamin with a B. Just let it happen.");
    }
}