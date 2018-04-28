import { Constructor, BaseMovieDbClient } from './BaseMovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export interface ErrorResponse {
    status_message?: string
    status_code?: number
}

export const WithMovies = <T extends Constructor<BaseMovieDbClient>>(Base: T) =>
    class extends Base {
        getMovie(id: number, language?: string, append_to_response?: string[]): Promise<Model.Movie> {
            let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
            return super.makeRequest(`movie/${id}`, opts);
        }
     }