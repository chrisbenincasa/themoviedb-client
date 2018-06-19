import * as Model from './model';
import { MovieDbApiRequestor } from './MovieDbClient';

export class PeopleAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor
    }

    async getPerson(id: number, language?: string, append_to_response?: string[]): Promise<Model.Person> {
        let opts = { qs: { language, append_to_response: append_to_response ? append_to_response.join(',') : null } }
        return this.requestor.makeRequest<Model.Person>(`person/${id}`, opts);
    }
}