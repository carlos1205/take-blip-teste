const Hapi = require('hapi');
const control = require('./controller/repoController');

const init = async () => {
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h ) => {
            let data = control();

            return data;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();