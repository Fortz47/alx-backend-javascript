#!/usr/bin/node

import express from 'express';
import { Routes } from './routes/index';

const app = express();
const port = 1245;

app.get('/', Routes.getRoutes()['/']);
app.get('/students', Routes.getRoutes()['/students']);
app.get('/students/:major', Routes.getRoutes()['/students/:major']);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
