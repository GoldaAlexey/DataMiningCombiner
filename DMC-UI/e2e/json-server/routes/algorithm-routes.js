const db = require('../db');
const verifyToken = require('../verify-token');

module.exports = {
    create(server) {
        // GET A ALGORITHM
        server.get('/:accountId/project/:projectId/algorithm/:algorithmId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            if (req.params.algorithmId === 'all') {
                const algorithms = db.algorithms.filter(algorithm =>
                    algorithm.mockUserId === accountId &&
                    algorithm.mockProjectId === projectId
                );
                res.jsonp(algorithms);
            } else {
                const algorithmId = Number(req.params.algorithmId);
                const algorithm = db.algorithms.find(algorithm =>
                    algorithm.mockUserId === accountId &&
                    algorithm.mockProjectId === projectId &&
                    algorithm.algorithmId === algorithmId
                );
                res.jsonp({ algorithm });
            }
        });

        // UPDATE A ALGORITHM
        server.put('/:accountId/project/:projectId/algorithm/:algorithmId', verifyToken.verify, (req, res) => {
            const newAlgorithm = req.body['algorithm'];
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const algorithmId = Number(req.params.algorithmId);
            const oldAlgorithm = db.algorithms.find(algorithm =>
                algorithm.mockUserId === accountId &&
                algorithm.mockProjectId === projectId &&
                algorithm.algorithmId === algorithmId
            );
            if (newAlgorithm && oldAlgorithm) {
                res.jsonp({ message: newAlgorithm.name + " updated." });
            } else {
                res.sendStatus(404);
            }
        });

        // ADD A NEW ALGORITHM
        server.post('/:accountId/project/:projectId/algorithm', verifyToken.verify, (req, res) => {
            const algorithm = req.body['algorithm'];
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const user = db.users.find(user => user.accountId === accountId);
            const project = db.projects.find(project =>
                project.mockUserId === accountId &&
                project.projectId === projectId);
            if (user && project && algorithm) {
                res.jsonp({
                    message: algorithm.name + " created in the project '" + project.name
                        + "' in the '" + user.userName + "' account."
                });
            } else {
                res.sendStatus(404);
            }
        });

        // DELETE A ALGORITHM
        server.delete('/:accountId/project/:projectId/algorithm/:algorithmId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const algorithmId = Number(req.params.algorithmId);
            const algorithm = db.algorithms.find(algorithm =>
                algorithm.mockUserId === accountId &&
                algorithm.mockProjectId === projectId &&
                algorithm.algorithmId === algorithmId
            );
            if (algorithm) {
                res.jsonp({ message: algorithm.name + " deleted." });
            } else {
                res.sendStatus(404);
            }
        });
    }
}