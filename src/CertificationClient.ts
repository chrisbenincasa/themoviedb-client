import { MovieDbApiRequestor } from "./MovieDbClient";
import * as Model from './model';
import { Certification } from "./model";

export class CertificationAccessClient {
    requestor: MovieDbApiRequestor

    constructor(requestor: MovieDbApiRequestor) {
        this.requestor = requestor;
    }

    async getMovieCertifications() {
        return this.requestor.makeRequest<any>('certification/movie/list').then(this.processResponseToMap);
    }

    async getTvCertifications() {
        return this.requestor.makeRequest<Model.CertificationListResponse>('certification/tv/list').then(this.processResponseToMap);
    }

    private processResponseToMap(r: any): Map<string, Certification> {
        const map = new Map<string, Model.Certification>();
        Object.keys(r.certifications).forEach(key => {
            map.set(key, r.certifications[key]);
        });
        return map;
    }
}