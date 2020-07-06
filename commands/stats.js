require('dotenv').config();

exports.run = (bot, msg, args) => {
  if (msg.member.user.id !== process.env.OWNER) return;
  console.log(bot.guilds);
};

exports.help = {
  name: 'stats',
  usage: 'stats',
  description: 'Bot stats'
};
