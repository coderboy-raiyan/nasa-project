/* eslint-disable no-restricted-globals */
/* eslint-disable object-curly-newline */
const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

async function httpAddNewLaunce(req, res) {
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
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunce,
};
