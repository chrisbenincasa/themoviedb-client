import { MovieDbApiRequestor } from "./MovieDbClient";
import * as Model from './model';

export class CertificationAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor;
    }

    async getMovieCertifications() {
        return this.requestor.makeRequest<Model.CertificationListResponse>('certification/movie/list');
    }

    async getTvCertifications() {
        return this.requestor.makeRequest<Model.CertificationListResponse>('certification/tv/list');
    }
}