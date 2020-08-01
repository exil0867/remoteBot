require('dotenv').config();
const fetch = require('node-fetch');

exports.run = async (bot, msg, args) => {
  if (!args[0]) {
    console.log('File URL not found!')
    msg.channel.send('Please add a direct file URL!');
    return;
  }

  const response = await fetch(args[0]);
  const fileSizeB = response.headers.get('content-length');

  // If 'content-length' is not null and is a number
  if (!isNaN(fileSizeB) && fileSizeB !== null) {
    const fileSizeMB = fileSizeB / Math.pow('1024', 2);

    if (fileSizeMB > 100) return msg.channel.send(`Error: File size is larger than 100MB`);
  }

  msg.channel.send({
    files: [args[0]]
  })
  .catch(err => {
    msg.channel.send(`Error: ${(err.message || 'Unknown')}`);
  });
};

exports.help = {
  name: 'remote',
  usage: 'remote',
  description: 'Remote upload a file'
};
