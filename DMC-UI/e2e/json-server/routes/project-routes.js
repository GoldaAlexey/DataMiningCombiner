const db = require('../db');
const verifyToken = require('../verify-token');

module.exports = {
    create(server) {
        // GET A PROJECT
        server.get('/:accountId/project/:projectId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            if (req.params.projectId === 'all') {
                const projects = db.projects.filter(project =>
                    project.mockUserId === accountId
                );
                res.jsonp(projects);
            } else {
                const projectId = Number(req.params.projectId);
                const project = db.projects.find(project =>
                    project.mockUserId === accountId &&
                    project.projectId === projectId
                );
                res.jsonp({ project });
            }
        });

        // UPDATE A PROJECT
        server.put('/:accountId/project/:projectId', verifyToken.verify, (req, res) => {
            const newProject = req.body['project'];
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const oldProject = db.projects.find(project =>
                project.mockUserId === accountId &&
                project.projectId === projectId
            );
            if (newProject && oldProject) {
                res.jsonp({ message: newProject.name + " updated." });
            } else {
                res.sendStatus(404);
            }
        });

        // ADD A NEW PROJECT
        server.post('/:accountId/project', verifyToken.verify, (req, res) => {
            const project = req.body['project'];
            const accountId = Number(req.params.accountId);
            const user = db.users.find(user => user.accountId === accountId);
            if (project && user) {
                res.jsonp({ message: project.name + " created in the '" + user.userName + "' account." });
            } else {
                res.sendStatus(404);
            }
        });

        // DELETE A PROJECT
        server.delete('/:accountId/project/:projectId', verifyToken.verify, (req, res) => {
            const accountId = Number(req.params.accountId);
            const projectId = Number(req.params.projectId);
            const project = db.projects.find(project =>
                project.mockUserId === accountId &&
                project.projectId === projectId
            );
            if (project) {
                res.jsonp({ message: project.name + " deleted." });
            } else {
                res.sendStatus(404);
            }
        });
    }
}