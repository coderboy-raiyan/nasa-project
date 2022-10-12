const launchesRouter = require('express').Router();
const { httpGetAllLaunches } = require('./launches.controller');

launchesRouter.get('/', httpGetAllLaunches);

module.exports = launchesRouter;
