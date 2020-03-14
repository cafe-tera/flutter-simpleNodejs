const app = require('./app');
const { connect } = require('./database');

async function main() {
    // Database conection
    await connect();

    await app.listen(4000);
    console.log('Server on pot 4000: Connected');
}

main();