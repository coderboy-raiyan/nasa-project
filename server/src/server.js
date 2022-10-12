const http = require('http');
require('dotenv').config();
const colors = require('colors');
const connectDb = require('./config/db');
const app = require('./app');
const { loadHabitablePlanets } = require('./models/planets.model');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

connectDb();
colors.enable();

app.get('/', (req, res) => {
    res.send({ message: 'Listening...' });
});

async function startServer() {
    await loadHabitablePlanets();
    server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
}

startServer();
