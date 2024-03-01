export interface GetClientsDto {
    limit?: number;
    skip?: number;
    total?: number;
    select?: string[];
}