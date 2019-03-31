// import express from 'express';
const express = require('express');
import * as data from '../data';

const bodyParser = require('body-parser')

const app = express();
const port = 3005;

app.use(bodyParser.json());

for(const actionKey in data) {
    if (actionKey[0] !== '_') {
        // console.log('action', action);
        const action = (data as any)[actionKey];
        app.use(`/${actionKey}`, async (req: any, res: any) => {
            return res.send(await action(req.body));
        });
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
