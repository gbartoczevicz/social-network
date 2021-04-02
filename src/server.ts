import express from 'express';

const app = express();

app.get('/', (_, response) => {
  return response.json({ message: 'Initial Setup :)' });
});

export { app as Server };
