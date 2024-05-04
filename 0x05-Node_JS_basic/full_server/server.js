#!/usr/bin/node

import express from 'express';
import mapRoutes from './routes';

const app = express();
const port = 1245;

mapRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
