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
            description: "*General informational commands that combine to form a general overview of the server.*",
            fields: [
              {
                name: "j!info",
                value: "Embeds bot information into the chat."
              },
              {
                name: "j!rules",
                value: "Lists the server's rules."
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
            description: "*A guide to the server's array of numerous self-assignable roles.*",
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
                value: "Removes the inputted role to you."
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
            description: "*Monkeys, Machinations, & Monies*",
            fields: [
              {
                name: "j!balance",
                value: "Lists your current balance so you can check how broke you are."
              },
              {
                name: "j!daily/j!dailies",
                value: "Deposits your daily allowance into your account!"
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
                value: "Lists the top ten pancake buyers, aka how much is Jess ahead by now?"
              },
              {
                name: "j!order [amount]",
                value: "Allows you to order the rare commodity pancakes! Leaving the [amount] argument blank will purchase one stack of pancakes, whereas inputting a number such as sixteen will allow you to purchase sixteen stacks of pancakes! Additionally, the '**j!orderall** command will order the maximum amount of pancakes you current balance will allow."
              },
              {
                name: "j!pancakes",
                value: "Shows you how many pancakes you have so that you can calculate how long it'll take to pass Jess on the leaderboard...and then still lose to her."
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
              name: "TITLE",
              icon_url: bot.user.avatarURL
            },
            description: "*DESCRIPTION_FISHING*",
            fields: [
              {
                name: "COMMAND1",
                value: "COMMANDDESC1"
              },
              {
                name: "COMMAND2",
                value: "COMMANDDESC2"
              },
              {
                name: "COMMAND3",
                value: "COMMANDDESC3"
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
                value: "I deal, you bet. The rules are simple: it's no limits classic Blackjack without splits or doubles. Beat my hand and you win 2x your bet. Match it and you keep your money. Lose to it and I pocket your money."
              },
              {
                name: "j!coinflip",
                value: "Flips a coin!"
              },
              {
                name: "j!fight",
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
                name: "j!sleep",
                value: "Tell someone to go to bed!"
              },
              {
                name: "j!hug",
                value: "Hug someone!"
              },
              {
                name: "j!love",
                value: "Tell someone that you love them!"
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