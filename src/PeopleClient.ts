import { MovieDbApiRequestor } from './MovieDbClient';
import { CoreOptions } from 'request';
import * as Model from './model';

export class PeopleAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    getPerson(id: number, language?: string, append_to_response?: string[]): Promise<Model.Person> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest(`person/${id}`, opts);
    }
}