# JareBot
## A Javascript Discord Bot

### General:
JareBot is Discord chat bot (obviously) that performs rudimentary chat tasks as well as executes complicated score and currency commands. This bot is confined to Jared's personal Discord server, and is primarily designed to assist in giveaways, moderation, and a wide array of information distribution. JareBot was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript.

### Setup:
You'll need to make a copy of `config-example.json` named `config.json` and fill in the needed values. Also, make files called `bank.json`, `fishing.json`, and `stats.json` and fill them with `{}`.
Necessary npm modules: `rethinkdbdash` and `discord.js`.

### Last Update:
**6.0.0**
- Migrated to RethinkDB

### Past Updates:
**5.2.4**
- Updated info embed
- Updated help embed
- Rewrote order module
- Rewrote bet initialization portion of the blackjack module
- Added j!esus command

**5.2.3**
- Updated help module
- Updated balance module
- Added classic blackjack module

**5.2.1**
- Added multi-GUI help interface
- Begun developing AFK command
- Begun developing fishing module
- Updated all embed footers
- Published the first commit to GitHub