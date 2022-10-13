const launchesRouter = require('express').Router();
const { httpGetAllLaunches, httpAddNewLaunce, httpAbortLaunch } = require('./launches.controller');

launchesRouter.route('/').get(httpGetAllLaunches).post(httpAddNewLaunce);
launchesRouter.route('/:id').delete(httpAbortLaunch);

module.exports = launchesRouter;
