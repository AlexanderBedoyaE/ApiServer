const {Router} = require('express');
const router = Router();

//Routes
router.get('/', (req, res) => {
    res.json({"Tittle":"Hello World"});
});

module.exports = router;