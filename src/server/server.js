import express from 'express';

import config from '../config';
console.log(config)
const { env, port } = config;
const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port} and enviroment ${env}`);
});
