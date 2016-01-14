var express_1 = require('express');
var q_1 = require('q');
var router = express_1.Router();
router
    .post('/', function (req, res, next) {
    q_1.Promise(function (resolve) {
        setTimeout(function () {
            resolve(req.query);
        }, 500);
    })
        .then(function (data) {
        res.send(data);
    });
})
    .get('/:param', function (req, res, next) {
    res.send({
        param: req.params.param,
        query: req.query
    });
});
module.exports = router;
//# sourceMappingURL=api-route.js.map