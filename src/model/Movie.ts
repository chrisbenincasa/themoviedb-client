import { Genre, ProductionCompany } from "./Common";

export interface SearchMoviesRequest {
    query: string
    language?: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
}

export interface SearchTvShowsRequest {
    query: string
    language?: string
    page?: number
    first_air_date_year?: number
}

export interface Movie {
    adult: boolean
    backdrop_path?: string
    belongs_to_collection?: object
    budget?: number
    genres?: Genre[]
    genre_ids?: number[];
    homepage?: string
    id: number
    imdb_id?: string
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[]
    production_countries?: object[]
    release_date?: string
    revenue?: number
    runtime?: number
    spoken_languages?: object[]
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
}