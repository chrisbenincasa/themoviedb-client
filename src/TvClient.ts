import * as Model from './model';
import { MovieDbApiRequestor } from './MovieDbClient';

export class TvAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async getTvShow(id: number, language?: string, append_to_response?: string[]): Promise<Model.TvShow> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest<Model.TvShow>(`tv/${id}`, opts);
    }

    async getTvShowSeason(tvId: number, seasonNumber: number, language?: string, append_to_response?: string[]): Promise<Model.TvShowSeason> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } };
        return this.requestor.makeRequest<Model.TvShowSeason>(`tv/${tvId}/season/${seasonNumber}`, opts);
    }

    async getTvShowSeasonCredits(tvId: number, seasonNumber: number): Promise<Model.TvShowCredits> {
        return this.requestor.makeRequest<Model.TvShowCredits>(`tv/${tvId}/season/${seasonNumber}/credits`);
    }
}