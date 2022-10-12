/* eslint-disable operator-linebreak */
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const planets = [];

function isHabitablePlanet(planet) {
    return (
        planet.koi_disposition === 'CONFIRMED' &&
        planet.koi_insol > 0.36 &&
        planet.koi_insol < 1.11 &&
        planet.koi_prad < 1.6
    );
}

function loadHabitablePlanets() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(
                parse({
                    comment: '#',
                    columns: true,
                }),
            )
            .on('data', (chunk) => {
                if (isHabitablePlanet(chunk)) {
                    planets.push(chunk);
                }
            })
            .on('error', (err) => {
                if (err) {
                    reject(err);
                }
            })
            .on('end', () => {
                console.log(planets.length);
                resolve();
            });
    });
}

module.exports = { planets, loadHabitablePlanets };
