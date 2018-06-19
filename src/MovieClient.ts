import * as Model from './model';
import { MovieDbApiRequestor } from './MovieDbClient';

export class MovieAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async getMovie(id: number, language?: string, append_to_response?: string[]): Promise<Model.Movie> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest<Model.Movie>(`movie/${id}`, opts);
    }
}