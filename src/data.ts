import { magic } from './magic';

export function getList(): Promise<string[]> {
    return magic(() => require('./server/data').getList);
}