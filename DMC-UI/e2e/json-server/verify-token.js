const constants = require('./constants');

module.exports = {
    verify(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader !== undefined) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            if (bearerToken && bearerToken == constants.tokenMock) {
                next();
            }
        }

        res.sendStatus(403);
    }
}