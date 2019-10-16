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
  
    calculateWinner(player_hand, cpu_hand, cards) {
      let player_total = this.calculateTotal(player_hand);
      while (
        this.calculateTotal(cpu_hand) <= player_total &&
        this.calculateTotal(cpu_hand) < 21
      ) {
        cpu_hand.push(this.drawCard(cards));
      }
      let cpu_total = this.calculateTotal(cpu_hand);
      if (cpu_total > 21 || cpu_total <= player_total) {
        if (
          cpu_total == player_total &&
          player_hand.length > cpu_hand.length
        ) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    },

    //async loop (exit needed?)
    main: async function (bot, msg) {
      let account = await bot.bank.get(msg.author.id);
      let stats = await bot.stats.get(msg.author.id);

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
            "Player's hand: "+
            player_hand +
            "\n" + "\n" +
            "React with 👆 to hit or ✋ to stand!",
          footer: {
            text: "Classic Blackjack",
            icon_url: msg.author.avatarURL
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
          if (this.calculateWinner(player_hand, cpu_hand, cards)) {
            blackjackMessage.edit({
              embed: {
                color: 0x33cc33,
                title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
                description:
                  "Dealer's hand: " +
                  cpu_hand +
                  "\n؜" +
                  "Player's hand: "+
                  player_hand +
                  "\n" + "\n" +
                  "Dealer busts, you have won $" + bet.toFixed(2) + "!",
                footer: {
                  text: "Classic Blackjack",
                  icon_url: msg.author.avatarURL
                },
                timestamp: new Date()
              }
            });
            //give money
            stats.blackjack.games += 1
            stats.blackjack.won += 1
            stats.blackjack.net += bet
            account.balance += bet*2;

            await bot.bank.update(account);
            await bot.stats.update(stats);
            } else {
            //dealer win
            blackjackMessage.edit({
              embed: {
                color: 0x33cc33,
                title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
                description:
                  "Dealer's hand: " +
                  cpu_hand +
                  "\n؜" +
                  "Player's hand: "+
                  player_hand +
                  "\n" + "\n" +
                  "Dealer wins, you have lost $" + bet.toFixed(2) + "!",
                footer: {
                  text: "Classic Blackjack",
                  icon_url: msg.author.avatarURL
                },
                timestamp: new Date()
              }
            });
            //stats update
            stats.blackjack.games += 1
            stats.blackjack.lost += 1
            stats.blackjack.net -= bet

            await bot.stats.update(stats);
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
                  "Player's hand: "+
                  player_hand +
                  "\n" + "\n" +
                  "Player busts, you have lost $" + bet.toFixed(2) + "!",
                footer: {
                  text: "Classic Blackjack",
                  icon_url: msg.author.avatarURL
                },
                timestamp: new Date()
              }
            });
            //stats update
            stats.blackjack.games += 1
            stats.blackjack.lost += 1
            stats.blackjack.net -= bet

            timeout = false;
            collector.stop();

            await bot.stats.update(stats);
          } else {
            blackjackMessage.edit({
              embed: {
                color: 0x33cc33,
                title: "♠️♥️**Blackjack Bet: $" + bet.toFixed(2) + "**♦️♣️",
                description:
                  "Dealer's hand: " +
                  cpu_hand +
                  "\n؜" +
                  "Player's hand: "+
                  player_hand +
                  "\n" + "\n" +
                  "React with 👆 to hit or ✋ to stand!",
                footer: {
                  text: "Classic Blackjack",
                  icon_url: msg.author.avatarURL
                },
                timestamp: new Date()
              }
            });
          }
        }
        let me = messageReaction.users
          .filter(user => user.username == msg.author.username)
          .first();
        messageReaction.remove(me);
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
                icon_url: msg.author.avatarURL
              },
              timestamp: new Date()
            }
          });
          //return bet
          account.balance += bet;
          await bot.bank.update(account);
        }
      });
    }
  }