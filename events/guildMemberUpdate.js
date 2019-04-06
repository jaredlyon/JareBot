var Discord = require('discord.js');

var arr1 = ["cutie patootie", "cutest person", "adorable? Yup.", "most adorbzzz", "CUTIEEEE", "omg so friccin cute ilysm", "paradoxically cute", "too cute to handle", "cute lvl. ∞", "Ph.D. in adorableness"];
var arr2 = ["huggable bean", "best bean", "jayce bean", "ily jayce", "we all love you jayce"]
var arr3 = [null]

exports.run = (bot, oldMember, newMember) => {
    if(oldMember.id == "133350262420013056" && oldMember.nickname != newMember.nickname && arr3.indexOf(newMember.nickname) < 0) {
        newMember.setNickname(arr3[Math.floor(Math.random() * arr3.length)])
        var channel = newMember.guild.channels.get("399740385221672974")
        //channel.send("Bjorn but with a Ch wouldn't want you to change you name, Chenjamin with a B. Just let it happen.");
    }
}