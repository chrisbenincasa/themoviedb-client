import { Constructor, BaseMovieDbClient } from './BaseMovieDbClient';
import { PagedResult } from './MovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export const WithSearch = <T extends Constructor<BaseMovieDbClient>>(Base: T) =>
    class extends Base {
        searchMovies(request: Model.SearchMoviesRequest): Promise<PagedResult<Model.Movie>> {
            let opts = { qs: request };
            return super.makeRequest<PagedResult<Model.Movie>>('search/movie', opts);
        }

        searchTvShows(request: Model.SearchTvShowsRequest): Promise<PagedResult<Model.TvShow>> {
            let opts = { qs: request };
            return super.makeRequest<PagedResult<Model.TvShow>>('search/tv', opts);
        }
    }