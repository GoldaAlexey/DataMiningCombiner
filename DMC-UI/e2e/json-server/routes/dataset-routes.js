const db = require('../db');
const verifyToken = require('../verify-token');

module.exports = {
    create(server) {
        // GET A DATASET
        server.get('/:accountId/project/:projectId/dataset/:datasetId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            if (req.params.datasetId === 'all') {
                const datasets = db.datasets.filter(dataset =>
                    dataset.mockUserId === accountId &&
                    dataset.mockProjectId === projectId
                );
                res.jsonp(datasets);
            } else {
                const datasetId = Number(req.params.datasetId);
                const dataset = db.datasets.find(dataset =>
                    dataset.mockUserId === accountId &&
                    dataset.mockProjectId === projectId &&
                    dataset.metaDataId === datasetId
                );
                res.jsonp({ dataset });
            }
        });

        // UPDATE A DATASET
        server.put('/:accountId/project/:projectId/dataset/:datasetId', verifyToken.verify, (req, res) => {
            const newDataset = req.body['dataset'];
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const datasetId = Number(req.params.datasetId);
            const oldDataset = db.datasets.find(dataset =>
                dataset.mockUserId === accountId &&
                dataset.mockProjectId === projectId &&
                dataset.metaDataId === datasetId
            );
            if (newDataset && oldDataset) {
                res.jsonp({ message: newDataset.name + " updated." });
            } else {
                res.sendStatus(404);
            }
        });

        // ADD A NEW DATASET
        server.post('/:accountId/project/:projectId/dataset', verifyToken.verify, (req, res) => {
            const dataset = req.body['dataset'];
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const user = db.users.find(user => user.accountId === accountId);
            const project = db.projects.find(project =>
                project.mockUserId === accountId &&
                project.projectId === projectId);
            if (user && project && dataset) {
                res.jsonp({
                    message: dataset.name + " created in the project '" + project.name
                        + "' in the '" + user.userName + "' account."
                });
            } else {
                res.sendStatus(404);
            }
        });

        // DELETE A DATASET
        server.delete('/:accountId/project/:projectId/dataset/:datasetId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const datasetId = Number(req.params.datasetId);
            const dataset = db.datasets.find(dataset =>
                dataset.mockUserId === accountId &&
                dataset.mockProjectId === projectId &&
                dataset.metaDataId === datasetId
            );
            if (dataset) {
                res.jsonp({ message: dataset.name + " deleted." });
            } else {
                res.sendStatus(404);
            }
        });
    }
}