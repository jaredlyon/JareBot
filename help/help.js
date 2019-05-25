module.exports = {
    name: 'help',
    permission: 1,
    main: function (bot, msg) {
        var x = msg.content.split(' ').splice(0)[0];

        //info
        if (x != null && x == "info") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Help & Info",
              icon_url: bot.user.avatarURL
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
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //roles
        } else if (x != null && x == "roles") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Self-Assignable Roles",
              icon_url: bot.user.avatarURL
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
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //currency
        } else if (x != null && x == "currency") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Currency",
              icon_url: bot.user.avatarURL
            },
            description: "*Monkeys, Machinations, & Monies:",
            fields: [
              {
                name: "j!statistics/j!stats [@user]",
                value: "Check out statistics on how well you or someone else is performing with their dailies, blackjack games, and bait attempts!"
              },
              {
                name: "j!balance [@user]",
                value: "Lists your or another user's current balance."
              },
              {
                name: "j!daily/j!dailies",
                value: "Deposits your daily allowance into your account! Repeatedly collecting you daily every 24 hours will start a streak, but neglecting the streak for more than 48 hours resets it."
              },
              {
                name: "j!baited",
                value: "Roll 1:3 odds to either triple your balance or set it back to zero...go on, do it, you won't."
              }
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //pancakes
        } else if (x != null && x == "pancakes") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Giveaways & Pancakes",
              icon_url: bot.user.avatarURL
            },
            description: "*Yep, these arbitrary stacks of 'food' determine the outcome of some of the giveaways.*",
            fields: [
              {
                name: "j!leaderboard/j!lb",
                value: "Lists the top ten pancake buyers in the server."
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
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //fishing
        } else if (x != null && x == "fishing") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Fishing Commands",
              icon_url: bot.user.avatarURL
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
                name: "j!inventory [@user]",
                value: "Lists your or someone else's inventory in the chat!"
              }
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //fun
        } else if (x != null && x == "fun") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Fun Commands",
              icon_url: bot.user.avatarURL
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
                name: "j!fight [@user]",
                value: "Hmph! I challenge thee to a contest of fisticuffs!"
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
                name: "j!esus [@user]",
                value: "In the name of the Father, the Son, and the Holy Spirit."
              },
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //other
        } else if (x != null && x == "other") {
          msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Miscellaneous Commands",
              icon_url: bot.user.avatarURL
            },
            description: "*I couldn't think of a better place to put these.*",
            fields: [
              {
                name: "j!afk [reason]",
                value: "Set yourself as AFK and add a note for anyone who might mention you!"
              },
              {
                name: "j!suggest [input]",
                value: "Send a suggestion/complaint into Jared's suggestion box!"
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
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner™ 2019"
            }
          }
        });

        //main menu
        } else {
          msg.channel.send({embed: {
              color: 3447003,
              author: {
                name: "Here's some help with me, your friendly neighborhood JareBot!",
                icon_url: bot.user.avatarURL
              },
              title: "I got hella commands, hella functions, and not-so-hella friends...",
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
                  name: "Other Commands:",
                  value: "**j!help other**; Specially featuring commands that lack a category!"
                }
              ],
              footer: {
                icon_url: msg.guild.iconURL,
                text: "© JL's Diner™ 2019"
              }
            }
          });
        }
    }
}