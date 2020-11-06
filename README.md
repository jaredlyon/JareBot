# JareBot
## A Javascript Discord Bot

### General:
JareBot is a Discord chat bot that performs various chat functions as well as uses an array of RethinkDB tables to create an economy. This project was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript.

### Setup:
Make a copy of `config-example.json` named `config.json` and fill in the needed values. You'll also need the `rethinkdbdash` and `discord.js` npm modules. You can find instructions on how to install and compile a RethinkDB server here: https://rethinkdb.com/. The current bot version was built to link with a server hosted on an external machine that runs Debian 9.

### Initializing the Database:
Once both the bot and RethinkDB are running, verify that the bot has successfully connected to the server pool and reported linkage to all the tables. Once complete, run the `dbinit` command to create the user accounts for the guild; however, this command will not function properly if any of the database tables have not been initialized or connected to properly.

### Last Update:
**8.2.2**
- Minor bug fixes
- Updated info.js for upcoming wiki rewrite

### Past Updates:
**8.2.1**
- Cleaned up and optimized the fishing modules

**8.2.0**
- Rebalanced fishing economy (again)
- Improved UI elements
- Improved code legibility and stability
- Added 'Is Jared at work?'
- Added movie role
- Added approval system
- Added command aliases

**8.1.0**
- Added shop
- Added dbadd command
- Updated help
- Updated rules
- Updated blackjack dealer behavior
- Updated the pancakes section in statistics
- Rebalanced fishing economy

**8.0.0**
- Migrated the bot to v12 of Discord.js
- Added a votekick function
- Added pushes to the blackjack module
- Added text channel timeouts
- Rebalanced income portion of the economy
- Touched up portions of the UI
- Updated README
- Fixed an issue where baiting during a blackjack game caused currency discrepancies

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
