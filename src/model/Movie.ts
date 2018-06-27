import { Genre, ProductionCompany } from "./Common";
import { CastMember } from ".";
import { CrewMember } from "./Person";

export interface SearchMoviesRequest {
    query: string
    language?: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
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

    // Join fields
    release_dates?: MovieReleaseDates,
    credits?: MovieCredits
}

export interface MovieExternalIds {
    imdb_id?: string
    id: number
}

export interface MovieReleaseDates {
    results: MovieReleaseDate[]
}

export interface MovieReleaseDate {
    iso_3166_1: string,
    release_dates: MovieCountryRelease[]
}

export interface MovieCountryRelease {
    certification?: string,
    release_date?: string,
    type: number // Maps to MovieReleaseType
}

export enum MovieReleaseType {
    Premiere = 1,
    LimitedTheatrical = 2,
    Theatrical = 3,
    Digital = 4,
    Physical = 5,
    TV = 6
}

export interface MovieCredits {
    cast: CastMember[],
    crew: CrewMember[]
}