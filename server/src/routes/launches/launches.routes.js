const launchesRouter = require('express').Router();
const { getAllLaunches } = require('./launches.controller');

launchesRouter.get('/', getAllLaunches);

module.exports = launchesRouter;
