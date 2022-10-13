const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket: 'Explorer IS1',
    lunchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
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

module.exports = { getAllLaunches, addNewLaunch };
