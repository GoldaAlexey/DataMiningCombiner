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
                user.userName == name &&
                user.password == password
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
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (bearerToken && bearerToken == tokenMock) {
            next();
        }
    }

    res.sendStatus(403);
}

server.post('/posts', verifyToken, (req, res) => {  
    res.jsonp({
        message: 'Post ...'
    });
});

server.use(router);

server.listen(8085, "localhost", () => {
    console.log('JSON Server is running');
});