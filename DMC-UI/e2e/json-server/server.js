const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
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

server.use(router);

server.post("/login", (req, res) => {
    //db.users.find()
    res.json({ message: req.params['email'] });
});

server.listen(8085, "localhost", () => {
    console.log('JSON Server is running');
});