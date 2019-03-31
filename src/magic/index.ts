import axios from 'axios';

export async function magic(action: Function) {
    const isServer = process.env.SERVER;
    
    // console.log('action tostring', action.toString());
    // console.log('action name', action.name);
    // return __webpack_require__(/*! ./server/data */ "./src/server/data.js").getList;
    // function () { return require('./server/data').getList; }
    // should also extract `./server/data`
    const regGetName = (/\).(.+);/gim).exec(action.toString());
    if (regGetName) {
        const [none, name] = regGetName;

        if (isServer !== undefined) {
            return action()();
        } else {
            const { data } = await axios.post(`http://127.0.0.1:3000/${name}`);
            return data;
        }
    }
}