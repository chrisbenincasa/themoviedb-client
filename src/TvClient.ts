import { MovieDbApiRequestor } from './MovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export class TvAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    getTvShow(id: number, language?: string, append_to_response?: string[]): Promise<Model.TvShow> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest(`tv/${id}`, opts);
    }

    getTvShowSeason(tvId: number, seasonNumber: number, language?: string, append_to_response?: string[]): Promise<Model.TvShowSeason> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } };
        return this.requestor.makeRequest(`tv/${tvId}/season/${seasonNumber}`, opts);
    }

    getTvShowSeasonCredits(tvId: number, seasonNumber: number): Promise<Model.TvShowCredits> {
        return this.requestor.makeRequest(`tv/${tvId}/season/${seasonNumber}/credits`);
    }
}