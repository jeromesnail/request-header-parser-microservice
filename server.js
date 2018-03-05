const express = require('express');
const app = express();

const port = '1337';

app.use((req, res) => {
  const software = req.headers['user-agent'].match(/\([^)]*\)/g).shift().slice(1, -1);
  const lang = req.headers['accept-language'].split(',').shift();
  let ipAddress = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',').shift();
  if (ipAddress.substr(0, 7) == "::ffff:") {
    ipAddress = ipAddress.substr(7)
  }
  res.json({
    'ipaddress': ipAddress,
    'language': lang,
    'software': software
  });
}).listen(port);
