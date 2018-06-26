import { CoreOptions } from 'request';
import request from 'request-promise-native';

import { MovieAccessClient } from './MovieClient';
import { PeopleAccessClient } from './PeopleClient';
import { SearchAccessClient } from './SearchClient';
import { TvAccessClient } from './TvClient';
import { CertificationAccessClient } from './CertificationClient';

export class MovieDbClient {
    movies: MovieAccessClient;
    people: PeopleAccessClient;
    search: SearchAccessClient;
    tv: TvAccessClient;
    certifications: CertificationAccessClient;
    
    requestor: MovieDbApiRequestor;
    apiKey: string;
    
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.requestor = new MovieDbApiRequestor(this.apiKey);
        this.movies = new MovieAccessClient(this.requestor);
        this.people = new PeopleAccessClient(this.requestor);
        this.search = new SearchAccessClient(this.requestor);
        this.tv = new TvAccessClient(this.requestor);
        this.certifications = new CertificationAccessClient(this.requestor);
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

        return request(MovieDbApiRequestor.baseUrl + path, opts).then(response => {
            return response as T;
        });
    }
}