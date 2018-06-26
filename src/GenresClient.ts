import { MovieDbApiRequestor } from '.';
import * as Model from '.'

export class GenreAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor;
    }

    async getMovieGenres(language?: string): Promise<Model.Genre[]> {
        return this.requestor.makeRequest<any>('genre/movie/list', { qs: { language }}).then(response => response.genres);
    }

    async getTvGenres(language?: string): Promise<Model.Genre[]> {
        return this.requestor.makeRequest<any>('genre/tv/list', { qs: { language }}).then(response => response.genres);
    }
}