import * as Model from './model';
import { MovieDbApiRequestor } from './MovieDbClient';

export class SearchAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async searchMovies(request: Model.SearchMoviesRequest): Promise<Model.PagedResult<Model.Movie>> {
        const opts = { qs: request };
        return this.requestor.makeRequest<Model.PagedResult<Model.Movie>>('search/movie', opts);
    }

    async searchTvShows(request: Model.SearchTvShowsRequest): Promise<Model.PagedResult<Model.TvShow>> {
        const opts = { qs: request };
        return this.requestor.makeRequest<Model.PagedResult<Model.TvShow>>('search/tv', opts);
    }

    async searchMulti(request: Model.SearchMultiRequest): Promise<Model.MultiSearchResponse> {
        const opts = { qs: request };
        return this.requestor.makeRequest<Model.MultiSearchResponse>('search/multi', opts);
    }
}