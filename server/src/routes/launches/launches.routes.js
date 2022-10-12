const launchesRouter = require('express').Router();
const { httpGetAllLaunches } = require('./launches.controller');

launchesRouter.use('/').get(httpGetAllLaunches);

module.exports = launchesRouter;
