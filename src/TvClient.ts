import { Constructor, BaseMovieDbClient } from './BaseMovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export const WithTvApi = <T extends Constructor<BaseMovieDbClient>>(Base: T) =>
    class extends Base {
        getTvShow(id: number, language?: string, append_to_response?: string[]): Promise<Model.TvShow> {
            let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
            return super.makeRequest(`tv/${id}`, opts);
        }
    }