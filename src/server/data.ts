import { readdir } from 'fs-extra';

export async function getList(): Promise<string[]> {
    return readdir('./');
}