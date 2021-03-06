export * from './Tv';
export * from './Movie';
export * from './Person';
export * from './Common';
export * from './Search';
export * from './Certification';

import { Movie } from './Movie';
import { TvShow } from './Tv';
import { Person } from './Person';
import { MultiSearchResponseFields } from './Search';

export interface PagedResult<T> {
    page: number
    results: T[]
    total_results: number
    total_pages: number,
    dates?: { minimum: string, maximum: string }
}

export type MultiSearchResponse = PagedResult<
    Movie & MultiSearchResponseFields |
    TvShow & MultiSearchResponseFields |
    Person & MultiSearchResponseFields
>