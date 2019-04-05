const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
const constants = require('./constants');
const db = require('./db');
const projectRoutes = require('./routes/project-routes');
const datasetRoutes = require('./routes/dataset-routes');
const algorithmRoutes = require('./routes/algorithm-routes');
//const jwt = require('jsonwebtoken');

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
        const name = req.body['username'];
        const password = req.body['password'];
        if (name) {
            const result = db.users.find(user =>
                user.userName === name &&
                user.password === password
            );
            if (result) {
                res.jsonp({
                    ...result,
                    ...{ token: constants.tokenMock }
                });
            }
        }

        res.sendStatus(404);
    }
});

projectRoutes.create(server);

datasetRoutes.create(server);

algorithmRoutes.create(server);

server.use(router);

server.listen(8085, "localhost", () => {
    console.log('JSON Server is running');
});