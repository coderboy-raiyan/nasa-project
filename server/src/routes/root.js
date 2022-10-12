const router = require('express').Router();
const planetsRouter = require('./planets/planets.router');

router.use('/planets', planetsRouter);

module.exports = router;
