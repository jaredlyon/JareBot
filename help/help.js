module.exports = {
  name: 'help',
  permission: 1,
  main: function (bot, msg) {
    var x = msg.content.split(' ').splice(0)[0];

    //info
    if (x != null && x == "info") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Help & Info",
            icon_url: bot.user.avatarURL()
          },
          description: "*General informational commands that combine to form a general overview of the bot and server:*",
          fields: [
            {
              name: "j!info",
              value: "Sends version information to the chat."
            },
            {
              name: "j!rules",
              value: "Sends the server rules to the chat."
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

      //roles
    } else if (x != null && x == "roles") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Self-Assignable Roles",
            icon_url: bot.user.avatarURL()
          },
          description: "*A guide to the server's array of numerous self-assignable roles:*",
          fields: [
            {
              name: "j!listroles",
              value: "Lists all of the server's self-assignable roles as well as their descriptions."
            },
            {
              name: "j!addrole [role]",
              value: "Adds the inputted role to you."
            },
            {
              name: "j!removerole [role]",
              value: "Removes the inputted role from you."
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

      //currency
    } else if (x != null && x == "currency") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Currency",
            icon_url: bot.user.avatarURL()
          },
          description: "*Monkeys, Machinations, & Monies:*",
          fields: [
            {
              name: "j!leaderboard/j!lb currency",
              value: "Lists the top eighteen currency holders in the server."
            },
            {
              name: "j!balance/j!bal [@user]",
              value: "Lists your or another user's current balance."
            },
            {
              name: "j!daily/j!dailies",
              value: "Deposits your daily allowance into your account! Repeatedly collecting your daily every 24 hours will start a streak, but neglecting the streak for more than 48 hours resets it."
            },
            {
              name: "j!checkstreaks",
              value: "Lists all active daily streaks."
            },
            {
              name: "j!baited",
              value: "Roll 1:3 odds to either triple your balance or set it back to zero...go on, do it, you won't."
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

      //pancakes
    } else if (x != null && x == "pancakes") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Giveaways & Pancakes",
            icon_url: bot.user.avatarURL()
          },
          description: "*Yep, these arbitrary stacks of 'food' determine the outcome of some of the giveaways.*",
          fields: [
            {
              name: "j!leaderboard/j!lb pancakes",
              value: "Lists the top eighteen pancake buyers in the server."
            },
            {
              name: "j!order [amount]",
              value: "Allows you to order the rare commodity pancakes! Additionally, the '**j!orderall** command will order the maximum amount of pancakes you current balance will allow."
            },
            {
              name: "j!pancakes [@user]",
              value: "Shows you how many pancakes you have or someone else possesses."
            },
            {
              name: "j!give [@user] [amount]",
              value: "Share some of your scrumptious breakfast delights with a friend!"
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

      //fishing
    } else if (x != null && x == "fishing") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Fishing Commands",
            icon_url: bot.user.avatarURL()
          },
          description: "*When gambling just doesn't cut it...*",
          fields: [
            {
              name: "j!cast",
              value: "Cast a line out and fish in the lake!"
            },
            {
              name: "j!sell [input]",
              value: "Sell some (or all) of your inventory using the appropriate inputs: **trash**, **common**, **rare**, **crabs**, **crocodiles**, **whales**, **dolphins**, **blowfish**, **squid**, **sharks**. You can also sell your entire inventory using **j!sell all**!"
            },
            {
              name: "j!inventory/j!inv [@user]",
              value: "Lists your or someone else's inventory in the chat!"
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

      //fun
    } else if (x != null && x == "fun") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Fun Commands",
            icon_url: bot.user.avatarURL()
          },
          description: "*Because we all like to just screw around sometimes...*",
          fields: [
            {
              name: "j!blackjack [bet amount]",
              value: "I deal, you bet. The rules are simple: it's no limits classic Blackjack without splits or doubles. Beat my hand and you win back twice your bet amount. Match it and you keep your money. Lose to my hand and I pocket your money."
            },
            {
              name: "j!coinflip",
              value: "Flips a coin!"
            },
            {
              name: "j!bored",
              value: "Embeds some fun flash games to play in the chat."
            },
            {
              name: "j!music",
              value: "Embeds Jared's many, many, many playlists into the chat."
            },
            {
              name: "j!sleep [@user]",
              value: "Tell someone to go to bed!"
            },
            {
              name: "j!hug [@user]",
              value: "Hug someone!"
            },
            {
              name: "j!love [@user]",
              value: "Tell someone that you love them!"
            },
            {
              name: "j!compliment [@user]",
              value: "Send someone a vague, yet strangely threatening compliment."
            },
            {
              name: "j!esus [@user]",
              value: "In the name of the Father, the Son, and the Holy Spirit."
            },
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

    //shop
    } else if (x != null && x == "shop") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Shop Commands",
            icon_url: bot.user.avatarURL()
          },
          description: "*Exchange pancakes for goods!*",
          fields: [
            {
              name: "j!shop",
              value: "View the shop inventory."
            },
            {
              name: "j!shop buy [input]",
              value: "Purchase an item from the shop; use numeric inputs to choose which item to buy!"
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

    //other
    } else if (x != null && x == "other") {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Miscellaneous Commands",
            icon_url: bot.user.avatarURL()
          },
          description: "*I couldn't think of a better place to put these.*",
          fields: [
            {
              name: "j!votekick [@user]",
              value: "Vote to kick a user from the voice channel temporarily."
            },
            {
              name: "j!suggest [input]",
              value: "Send a suggestion/complaint into Jared's suggestion box!"
            },
            {
              name: "j!collatz",
              value: "Tests the Collatz conjecture."
            },
            {
              name: "j!link",
              value: "Sends an invite link for the diner into the chat."
            },
            {
              name: "j!ping",
              value: "Reports the bot ping."
            },
            {
              name: "j!uptime",
              value: "Reports the bot uptime."
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });

    //main menu
    } else {
      msg.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: "Here's some help with me, your friendly neighborhood JareBot!",
            icon_url: bot.user.avatarURL()
          },
          title: "*I got hella commands, hella functions, and not-so-hella friends...*",
          description: "*Please love me.*",
          fields: [
            {
              name: "Help & Info:",
              value: "**j!help info**; General informational commands that combine to form a general overview of the server."
            },
            {
              name: "Self-Assignable Roles:",
              value: "**j!help roles**; Help with the server's self-assignable roles."
            },
            {
              name: "Currency:",
              value: "**j!help currency**; A guide to server economics!"
            },
            {
              name: "Pancakes:",
              value: "**j!help pancakes**; And other useless foodstuffs for sale."
            },
            {
              name: "Fishing:",
              value: "**j!help fishing**; Yes, we have a lake."
            },
            {
              name: "Fun:",
              value: "**j!help fun**; Yes, we also like to have fun."
            },
            {
              name: "Shop:",
              value: "**j!help shop**; Assistance with your shopping addiction."
            },
            {
              name: "Other Commands:",
              value: "**j!help other**; Specially featuring commands that lack a category!"
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL(),
            text: msg.guild.name
          }
        }
      });
    }
  }
}