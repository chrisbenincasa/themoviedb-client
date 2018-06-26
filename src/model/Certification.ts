export interface Certification {
    certification: string,
    meaning: string,
    order: number
}

export interface CertificationListResponse {
    certifications: Map<string, Certification>
}