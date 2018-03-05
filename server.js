const express = require('express');
const app = express();

const port = /*process.env.PORT*/ '1337';

app.use((req, res) => {
  const software = req.headers['user-agent'].match(/\([^)]*\)/g).shift().slice(1, -1);
  const lang = req.headers['accept-language'].split(',').shift();
  const ipAdress = req.ip;
  res.json({
    'ipaddress': ipAdress,
    'language': lang,
    'software': software
  });
}).listen(port);
