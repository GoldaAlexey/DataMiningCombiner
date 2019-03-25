const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const tokenMock = 'tokenKey';
const db = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(cookieParser());

//enable CORS
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

server.use(middlewares);

//custom routing
server.use(jsonServer.rewriter({
    '/rest/*': '/$1'
}));

server.post('/login', (req, res, next) => {
    if (req.method === 'POST') {
        const name = req.body['name'];
        const password = req.body['password'];
        if (name) {
            const result = db.users.find(user =>
                user.userName === name &&
                user.password === password
            );
            if (result) {
                res.jsonp({
                    ...result,
                    tokenMock
                });
            }
        }

        res.sendStatus(404);
    }
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader !== undefined) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (bearerToken && bearerToken == tokenMock) {
            next();
        }
    }

    res.sendStatus(403);
}

server.get('/:accountId/project/:projectId', verifyToken, (req, res) => {
    const accountId = Number(req.params.accountId);
    if (req.params.projectId === 'all') {
        const projects = db.projects.filter(project =>
            project.dtoId === accountId
        );
        res.jsonp(projects);
    } else {
        const projectId = Number(req.params.projectId);
        const project = db.projects.find(project =>
            project.dtoId === accountId &&
            project.projectId === projectId
        );
        res.jsonp({ project });
    }
});

server.put('/:accountId/project/:projectId', verifyToken, (req, res) => {
    const newProject = req.body['project'];
    const accountId = Number(req.params.accountId);
    const projectId = Number(req.params.projectId);
    const oldProject = db.projects.find(project =>
        project.dtoId === accountId &&
        project.projectId === projectId
    );
    if (newProject && oldProject) {
        res.jsonp({ message: newProject.name + " updated." });
    } else {
        res.sendStatus(404);
    }
});

server.post('/:accountId/project', verifyToken, (req, res) => {
    const project = req.body['project'];
    const accountId = Number(req.params.accountId);
    const user = db.users.find(user => user.accountId === accountId);
    if (project && user) {
        res.jsonp({ message: project.name + " created in the '" + user.userName + "' account." });
    } else {
        res.sendStatus(404);
    }
});

server.delete('/:accountId/project/:projectId', verifyToken, (req, res) => {
    const accountId = Number(req.params.accountId);
    const projectId = Number(req.params.projectId);
    const project = db.projects.find(project =>
        project.dtoId === accountId &&
        project.projectId === projectId
    );
    if (project) {
        res.jsonp({ message: project.name + " deleted." });
    } else {
        res.sendStatus(404);
    }
});

server.use(router);

server.listen(8085, "localhost", () => {
    console.log('JSON Server is running');
});