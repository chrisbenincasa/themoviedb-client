import { MovieDbApiRequestor } from './MovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export class MovieAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    getMovie(id: number, language?: string, append_to_response?: string[]): Promise<Model.Movie> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest(`movie/${id}`, opts);
    }
}