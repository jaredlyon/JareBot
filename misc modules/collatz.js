module.exports = {
    name: "collatz",
    permission: 1,
    main: function(bot, msg) {
        msg.channel.send(`> **The Collatz conjecture is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer *n*. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of *n*, the sequence will always reach 1.**\n-<https://en.wikipedia.org/wiki/Collatz_conjecture>`);
        msg.channel.send("Enter a positive integer that you would like tested:").then(() => {
            const filter = m => msg.author.id === m.author.id;

            msg.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] }).then(messages => {
                console.log(messages);
                var number = Number(messages.first().content);
                var iterations = 0;
                console.log(number);

                if (isNaN(number)) {
                    msg.reply("incorrect input (NaN).")
                } else if (!Number.isInteger(number)) {
                    msg.reply("number must be an integer!");
                } else if (number < 1) {
                    msg.reply("negative numbers break this Collatz conjecture tester, since negative integers reveal three separate loops as opposed to the positiver integer set's 4-2-1 loop.");
                } else {
                    const sequence = [];
                    sequence.push(number);
                    while (number != 1) {
                        if (number % 2 == 0) {
                            number = number / 2;
                            console.log(number);
                            sequence.push(" " + number);
                            iterations++;
                        } else {
                            number = (number * 3) + 1;
                            console.log(number);
                            sequence.push(" " + number);
                            iterations++;
                        }
                    }

                    msg.reply("your number went through `" + iterations + "` iteration(s) before being reduced to `1`.");
                    msg.channel.send("Final sequence: [" + sequence + "].").catch(() => {
                        msg.channel.send("*Final sequence could not be displayed due to its length.*");
                    })
                }
            })
            .catch(() => {
                msg.reply('exiting program...');
            });
        });
    }
}