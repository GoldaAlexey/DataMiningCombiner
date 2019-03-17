const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
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
    const user = {
        id: 1,
        username: 'Name',
        email: 'em@em.com'
    };

    jwt.sign({user}, 'secretKey', (err, token) => {
        res.jsonp({
            token
        });
    });
});

server.post('/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.jsonp({
                message: 'Post ...',
                authData
            });
        }
    });
    res.jsonp({
        message: 'Post ...'
    });
});

// Verify Token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

server.use(router);

server.listen(8085, "localhost", () => {
    console.log('JSON Server is running');
});