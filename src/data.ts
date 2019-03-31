import axios from 'axios';

export async function getList(isServer = false): Promise<string[]> {
    if (isServer) {
        return require('./server/data').getList();
    } else {
        const { data } = await axios.post('http://127.0.0.1:3000/getList');
        return data;
    }
}