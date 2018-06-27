import * as Model from './model';
import { MovieDbApiRequestor } from './MovieDbClient';
import { PagedResult } from './model';

export class MovieAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async getMovie(id: number, language?: string, append_to_response?: string[]): Promise<Model.Movie> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest<Model.Movie>(`movie/${id}`, opts);
    }

    async getNowPlaying(language?: string, page?: number, region?: string): Promise<PagedResult<Partial<Model.Movie>>> {
        return this.getMovieGeneral('now_playing', language, page, region);
    }

    async getPopular(language?: string, page?: number, region?: string): Promise<PagedResult<Partial<Model.Movie>>> {
        return this.getMovieGeneral('popular', language, page, region);
    }

    async getTopRated(language?: string, page?: number, region?: string): Promise<PagedResult<Partial<Model.Movie>>> {
        return this.getMovieGeneral('top_rated', language, page, region);
    }

    async getUpcoming(language?: string, page?: number, region?: string): Promise<PagedResult<Partial<Model.Movie>>> {
        return this.getMovieGeneral('upcoming', language, page, region);
    }

    async getMovieGeneral(endpoint: string, language?: string, page?: number, region?: string): Promise<PagedResult<Partial<Model.Movie>>> {
        let opts = { qs: { language, page, region } };
        return this.requestor.makeRequest<PagedResult<Partial<Model.Movie>>>(`movie/${endpoint}`, opts);
    }
}