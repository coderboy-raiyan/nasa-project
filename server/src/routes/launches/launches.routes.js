const launchesRouter = require('express').Router();
const { httpGetAllLaunches, httpAddNewLaunce } = require('./launches.controller');

launchesRouter.route('/').get(httpGetAllLaunches).post(httpAddNewLaunce);

module.exports = launchesRouter;
