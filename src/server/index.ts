// import express from 'express';
const express = require('express');
import { getList } from '../data';

const app = express();
const port = 3005;

app.post('/getList', async (req: any, res: any) => res.send(await getList(true)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
