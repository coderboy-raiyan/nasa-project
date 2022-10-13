/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable object-curly-newline */
const { getAllLaunches, addNewLaunch, abortLaunchById } = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

async function httpAddNewLaunce(req, res) {
    try {
        const { mission, rocket, target, launchDate } = req.body;
        if (!mission || !rocket || !target || !launchDate) {
            return res.status(400).json({ message: 'All the fields are required' });
        }

        req.body.launchDate = new Date(launchDate);
        if (isNaN(req.body.launchDate)) {
            return res.status(400).json({ message: 'Invalid date' });
        }

        addNewLaunch(req.body);
        return res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
    }
}

async function httpAbortLaunch(req, res) {
    try {
        const launchId = +req.params.id;
        const aborted = abortLaunchById(launchId, res);

        if (aborted) {
            return res.status(200).json(aborted);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunce,
    httpAbortLaunch,
};
