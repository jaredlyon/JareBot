module.exports = {
  name: "blackjack",
  permission: 1,
  //functions
  restart(player_hand, cpu_hand, cards) {
    player_hand.push(this.drawCard(cards))
    cpu_hand.push(this.drawCard(cards));
    player_hand.push(this.drawCard(cards));
  },

  drawCard(cards) {
    let i = Math.floor(Math.random() * cards.length);
    return cards.splice(i, 1)[0];
  },

  calculateTotal(hand) {
    let total = 0;
    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K") {
        total += 10;
      } else if (hand[i] == "A") {
        total += 11;
      } else {
        total += hand[i];
      }
    }

    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A" && total > 21) {
        total -= 10;
      }
    }
    return total;
  },

  hasAce(hand) {
    var ace;
    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A") {
        ace = true;
      } else {
        ace = false;
      }
    }
  },

  calculateWinner(player_hand, cpu_hand, cards) {
    //dealer draw
    while (this.calculateTotal(cpu_hand) < 17) {
      cpu_hand.push(this.drawCard(cards));
    }
    let player_total = this.calculateTotal(player_hand);
    let cpu_total = this.calculateTotal(cpu_hand);

    /**
     * note that some of the outcomes represented below are unused but kept in the code architecture
     * for legibility and ease for any future edits
     * 0 dealer bust
     * 1 dealer win
     * 2 player bust
     * 3 player win
     * 4 push
     */
    if (cpu_total > 21) {
      return 0; //on dealer bust
    } else if (player_total > 21) {
      console.log("2");
      return 2; //unused; on player bust
    } else {
      if (cpu_total > player_total) {
        return 1; //on dealer win
      } else if (cpu_total < player_total) {
        return 3; //on player win
      } else if (cpu_total == player_total) {
        return 4; //on push
      }
    }
  },

  //async loop
  main: async function (bot, msg) {
    let account = await bot.bank.get(msg.author.id);

    //card variables
    var bet;
    var cards = [
      "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K",
      "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K",
      "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K",
      "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"
    ];
    var player_hand = [];
    var cpu_hand = [];
    var timeout = true;

    //initial bet
    if (msg.args[0] && !isNaN(msg.args[0])) {
      bet = Number(msg.args[0]);
      if (account.balance.toFixed(2) < bet) {
        msg.channel.send("You frickin' foolian juulian, you don't have enough money to cover your bet!")
        return;
      } else if (bet < 0.01) {
        msg.channel.send("You frickin' foolian juulian, you can't bet that amount!")
        return;
      } else {
        account.balance -= bet
        await bot.bank.update(account);
      }
    } else {
      bet = 10;
      if (account.balance.toFixed(2) < bet) {
        msg.channel.send("You frickin' foolian juulian, you don't have enough money to cover your bet!")
        return;
      } else if (bet < 0.01) {
        msg.channel.send("You frickin' foolian juulian, you can't bet that amount!")
        return;
      } else {
        account.balance -= bet
        await bot.bank.update(account);
      }
    }

    //prevent other modules from working
    bot.blackjackInProgress.add(msg.author.id);
    //set table
    this.restart(player_hand, cpu_hand, cards);
    let blackjackMessage = await msg.channel.send({
      embed: {
        color: 0x33cc33,
        title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
        description:
          "Dealer's hand: " +
          cpu_hand +
          "\n؜" +
          "Player's hand: " +
          player_hand +
          "\n" + "\n" +
          "React with 👆 to hit or ✋ to stand!",
        footer: {
          text: "Classic Blackjack",
          icon_url: msg.author.avatarURL()
        },
        timestamp: new Date()
      }
    })
      .then(async function (message) {
        await message.react("👆")
        await message.react("✋")
        return message;
      });

    let filter = (reaction, user) =>
      (reaction.emoji.name === "👆" || reaction.emoji.name === "✋") &&
      user.id === msg.author.id;

    //play table
    let collector = blackjackMessage.createReactionCollector(filter, {
      time: 1000 * 3 * 60
    });

    //on stand & dealer bust
    collector.on("collect", async messageReaction => {
      if (messageReaction.emoji.name === "✋") {
        if (this.calculateWinner(player_hand, cpu_hand, cards) == 0) {
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "Dealer busts, you have won $" + bet.toFixed(2) + "!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });
          //give money
          account.balance += bet * 2;

          await bot.bank.update(account);
          bot.blackjackInProgress.delete(msg.author.id);
        } else if (this.calculateWinner(player_hand, cpu_hand, cards) == 1) {
          //dealer win
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "Dealer wins, you have lost $" + bet.toFixed(2) + "!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });

          bot.blackjackInProgress.delete(msg.author.id);
        } else if (this.calculateWinner(player_hand, cpu_hand, cards) == 3) {
          //player win
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "Player wins, you have won $" + bet.toFixed(2) + "!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });
          //give money
          account.balance += bet * 2;

          await bot.bank.update(account);
          await bot.stats.update(stats);
          bot.blackjackInProgress.delete(msg.author.id);
        } else if (this.calculateWinner(player_hand, cpu_hand, cards) == 4) {
          //push
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "Push, you regain your bet of $" + bet.toFixed(2) + "!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });

          await bot.bank.update(account);
          bot.blackjackInProgress.delete(msg.author.id);
        }
        timeout = false;
        collector.stop();

        //on hit & dealer win
      } else if (messageReaction.emoji.name === "👆") {
        player_hand.push(this.drawCard(cards));
        if (this.calculateTotal(player_hand) > 21) {
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "Player busts, you have lost $" + bet.toFixed(2) + "!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });

          timeout = false;
          collector.stop();
          
          bot.blackjackInProgress.delete(msg.author.id);
        } else {
          blackjackMessage.edit({
            embed: {
              color: 0x33cc33,
              title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
              description:
                "Dealer's hand: " +
                cpu_hand +
                "\n؜" +
                "Player's hand: " +
                player_hand +
                "\n" + "\n" +
                "React with 👆 to hit or ✋ to stand!",
              footer: {
                text: "Classic Blackjack",
                icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
            }
          });
        }
      }
      messageReaction.users.remove(msg.author);
    });
    collector.on("end", async collected => {
      if (timeout) {
        blackjackMessage.edit({
          embed: {
            color: 0x33cc33,
            title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
            description: "Session timed out.",
            footer: {
              text: "Classic Blackjack",
              icon_url: msg.author.avatarURL()
            },
            timestamp: new Date()
          }
        });
        //return bet
        account.balance += bet;
        await bot.bank.update(account);
        bot.blackjackInProgress.delete(msg.author.id);
      }
    });
  }
}