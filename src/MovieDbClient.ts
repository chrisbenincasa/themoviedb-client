import { CoreOptions } from 'request';
import request from 'request-promise-native';
import * as qs from 'querystring';
import { Constructor, BaseMovieDbClient } from './BaseMovieDbClient';
import { WithSearch } from './SearchClient';
import { WithKeywords } from './KeywordsClient';
import { WithMovies } from './MovieClient';
import { WithTvApi } from './TvClient';
import * as Model from './model';

export interface PagedResult<T> {
    page: number;
    results: [T],
    total_results: number;
    total_pages: number;
}

export const MovieDbClient = 
    WithMovies(WithTvApi(WithKeywords(WithSearch(BaseMovieDbClient))));

export default MovieDbClient;