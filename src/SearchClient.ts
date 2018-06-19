import * as Model from './model';
import { MovieDbApiRequestor, PagedResult } from './MovieDbClient';

export class SearchAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async searchMovies(request: Model.SearchMoviesRequest): Promise<PagedResult<Model.Movie>> {
        const opts = { qs: request };
        return this.requestor.makeRequest<PagedResult<Model.Movie>>('search/movie', opts);
    }

    async searchTvShows(request: Model.SearchTvShowsRequest): Promise<PagedResult<Model.TvShow>> {
        const opts = { qs: request };
        return this.requestor.makeRequest<PagedResult<Model.TvShow>>('search/tv', opts);
    }

    async searchMulti(request: Model.SearchMultiRequest): Promise<PagedResult<Model.Movie | Model.TvShow | Model.Person>> {
        const opts = { qs: request };
        return this.requestor.makeRequest<PagedResult<Model.Movie | Model.TvShow | Model.Person>>('search/multi', opts);
    }
}