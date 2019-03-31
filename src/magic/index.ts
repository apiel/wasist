import axios from 'axios';

export async function magic(action: Function) {
    const isServer = process.env.SERVER;
    if (isServer !== undefined) {
        return action();
    } else {
        const { data } = await axios.post('http://127.0.0.1:3000/getList');
        return data;
    }
}