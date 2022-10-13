const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('January 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    lastFlightNumber++;
    launches.set(lastFlightNumber, {
        ...launch,
        flightNumber: lastFlightNumber,
        customer: ['Raiyan', 'NASA'],
        upcoming: true,
        success: true,
    });
}

function abortLaunchById(launchId, res) {
    if (!launches.has(+launchId)) {
        return res.status(404).json({ message: 'Launch does not exits' });
    }

    const aborted = launches.get(+launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = { getAllLaunches, addNewLaunch, abortLaunchById };
