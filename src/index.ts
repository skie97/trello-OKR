// Although the initial intent was to run this off node.js
// it was far easier to simply put everything onto an Apache web server
// and that was how it was really used.

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'https://trello.com' }));

app.get('/' , (req, res) => {
    res.send('Express + Typescript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
