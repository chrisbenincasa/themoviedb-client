import { MovieDbApiRequestor } from './MovieDbClient';
import { PagedResult } from './MovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export class SearchAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    searchMovies(request: Model.SearchMoviesRequest): Promise<PagedResult<Model.Movie>> {
        let opts = { qs: request };
        return this.requestor.makeRequest<PagedResult<Model.Movie>>('search/movie', opts);
    }

    searchTvShows(request: Model.SearchTvShowsRequest): Promise<PagedResult<Model.TvShow>> {
        let opts = { qs: request };
        return this.requestor.makeRequest<PagedResult<Model.TvShow>>('search/tv', opts);
    }
}