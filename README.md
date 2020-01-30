# JareBot
## A Javascript Discord Bot

### General:
JareBot is Discord chat bot (obviously) that performs rudimentary chat tasks as well as executes complicated score and currency commands. This bot is confined to Jared's personal Discord server, and is primarily designed to assist in giveaways, moderation, and a wide array of information distribution. JareBot was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript.

### Setup:
Make a copy of `config-example.json` named `config.json` and fill in the needed values. You'll also need the `rethinkdbdash` and `discord.js` npm modules. You can find instructions on how to install and compile a RethinkDB server here: https://rethinkdb.com/. The current bot version was built to link with a server hosted on an external machine that runs Debian 9.

### Last Update:
**7.0.0**
- Fixed coinflip bug
- Lowered fishing cooldown from 12 to 7 seconds
- Updated server rules
- Added pancake tracking to the stats
- Added j!bal alias for j!balance
- Added j!inv alias for j!inventory
- Split streaks into separate data table
- Updated j!help
- Added currency leaderboard
- Updated j!music
- Restructured dated footnotes
- Made the code for j!love, j!hug, & j!sleep prettier
- Added j!compliment

### Past Updates:
**6.0.1**
- Cleaned up several hundred lines of code
- Minor bug fixes
- Revamped footer and ID system

**6.0.0**
- Migrated to RethinkDB
- Rebalanced fishing module
- General cleanup and bug fixes

**5.4.0/5.3.6**
- Added fishing; includes three new commands and an extra storage file
- Added passive income and fishing to currency statistics
- Updated j!pancake, j!balance, and j!statistics modules so that users can check other user data
- Updated j!sleep
- Rewrote majority of the help blurbs and added the fishing section
- Fixed issue where blackjack would keep the bet after a session timeout

**5.3.5**
- Added j!give to help module
- Updated the j!listroles footer
- Added currency statistics module & added inserts to all associated commands

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
