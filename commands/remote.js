require('dotenv').config();

exports.run = (bot, msg, args) => {
  if (!args[0]) {
    console.log('File URL not found!')
    msg.channel.send('Please add a direct file URL!');
    return;
  }

  msg.channel.send({
    files: [args[0]]
  })
  .catch(console.error);
};

exports.help = {
  name: 'remote',
  usage: 'remote',
  description: 'Remote upload a file'
};
