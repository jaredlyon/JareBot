module.exports = {
    name: "threeplusone",
    permission: 1,
    main: function(bot, msg) {
        msg.channel.send(`**"The Collatz conjecture is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1."**`);
        msg.channel.send("Enter a whole number that you would like tested:").then(() => {
            const filter = m => msg.author.id === m.author.id;

            msg.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] }).then(messages => {
                console.log(messages);
                var number = Number(messages.first().content);
                const sequence = [];
                console.log(number);
                if (Number.isInteger(number)) {
                    while (number != 1) {
                        if (number % 2 == 0) {
                            number / 2;
                            console.log(number);
                            sequence.push(number);
                            iterations++;
                        } else {
                            (number * 3) + 1;
                            console.log(number);
                            sequence.push(number);
                            iterations++;
                        }
                    }
                    msg.reply("Your number went through " + iterations + " before being reduced to `1`.\n Final sequence: " + sequence);
                } else {
                    msg.channel.send("Incorrect input! Exiting program...");
                }
            }).catch(() => {
                msg.reply('you did not enter any input! Exiting program...');
            });
        });
    }
}