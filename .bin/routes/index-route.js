var express_1 = require('express');
var router = express_1.Router();
router
    .get('/', function (req, res, next) {
    res.render('index');
});
module.exports = router;
//# sourceMappingURL=index-route.js.map