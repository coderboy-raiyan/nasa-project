const router = require('express').Router();
const launchesRouter = require('./launches/launches.routes');
const planetsRouter = require('./planets/planets.router');

router.use('/planets', planetsRouter);
router.use('/launches', launchesRouter);

module.exports = router;
