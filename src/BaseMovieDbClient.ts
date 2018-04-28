import { CoreOptions } from 'request';
import request from 'request-promise-native';
import * as qs from 'querystring';

export type Constructor<T> = new (...args: any[]) => T;


export class BaseMovieDbClient {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    makeRequest<T>(path: string, options?: CoreOptions): Promise<T> {
        let opts: CoreOptions = options || {};
        opts.json = true;

        if (opts.qs) {
            opts.qs.api_key = this.apiKey;
        } else {
            opts.qs = { api_key: this.apiKey };
        }

        const url = `https://api.themoviedb.org/3/${path}`

        console.log(`Requesting url = ${url}`);

        return request(url, opts).then(response => {
            return response as T;
        });
    }
}