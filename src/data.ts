import { magic } from './magic';

export function getList(input: { foo: string}): Promise<string[]> {
    return magic(() => require('./server/data').getList, input);
}

// we could do magic<string[]>(...)