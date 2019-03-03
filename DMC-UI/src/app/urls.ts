import { environment } from 'src/environments/environment';

function buildEndpoint(...parts: any[]): string {
    return environment.APIEndpoint.concat(parts.join('/'));
}

export const URLS = {
    ACCOUNT: (userId: number) => buildEndpoint('user', userId),
    LOGIN: buildEndpoint('login'),

    PROJECTS: (userId: number) => buildEndpoint(userId, 'project', 'all'),
    PROJECT: (userId: number, projectId: number) => buildEndpoint(userId, 'project', projectId),

    DATASETS: (userId: number, projectId: number) => buildEndpoint(userId, 'project', projectId, 'dataset', 'all'),
    DATASET: (userId: number, projectId: number, datasetId: number) => buildEndpoint(userId, 'project', projectId, 'dataset', datasetId)
};
