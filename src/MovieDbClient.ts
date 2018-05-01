import { MovieAccessClient } from './MovieClient';

import { CoreOptions } from 'request';
import request from 'request-promise-native';
import * as qs from 'querystring';
import { PeopleAccessClient } from './PeopleClient';
import { SearchAccessClient } from './SearchClient';
import { TvAccessClient } from './TvClient';

export interface PagedResult<T> {
    page: number
    results: T[]
    total_results: number
    total_pages: number
}

export class MovieDbClient {
    movies: MovieAccessClient;
    people: PeopleAccessClient;
    search: SearchAccessClient;
    tv: TvAccessClient;

    requestor: MovieDbApiRequestor;
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.requestor = new MovieDbApiRequestor(this.apiKey);
        this.movies = new MovieAccessClient(this.requestor);
        this.people = new PeopleAccessClient(this.requestor);
        this.search = new SearchAccessClient(this.requestor);
        this.tv = new TvAccessClient(this.requestor);
    }
}

export class MovieDbApiRequestor {
    static baseUrl = `https://api.themoviedb.org/3/`;

    apiKey: string

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async makeRequest<T>(path: string, options?: CoreOptions): Promise<T> {
        let opts: CoreOptions = options || {};
        opts.json = true;

        if (opts.qs) {
            opts.qs.api_key = this.apiKey;
        } else {
            opts.qs = { api_key: this.apiKey };
        }

        console.log(`Requesting url = ${MovieDbApiRequestor.baseUrl + path}`);

        return request(MovieDbApiRequestor.baseUrl + path, options).then(response => {
            return response as T;
        });
    }
}