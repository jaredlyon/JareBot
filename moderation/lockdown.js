module.exports = {
    name: 'lockdown',
    permission: 2,
    main: function(bot, msg) {
        msg.guild.members.forEach(member => {
            member.setRoles(["399740949707882497"], "Lockdown disengaged!")
        });
    }
};