// import express from 'express';
const express = require('express');
import * as data from '../data';

const app = express();
const port = 3005;

for(const actionKey in data) {
    if (actionKey[0] !== '_') {
        // console.log('action', action);
        const action = (data as any)[actionKey];
        // console.log('yo', `/${actionKey}`, action);
        app.use(`/${actionKey}`, async (req: any, res: any) => res.send(await action()));
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
