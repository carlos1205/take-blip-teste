require('dotenv').config();
const {PORT, HOST} = process.env;
const Hapi = require('hapi');
const control = require('./controller/repoController');

const init = async () => {
    const server = Hapi.Server({
        port: PORT,
        host: HOST
    });

    server.route({
        config: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        method: 'GET',
        path: '/',
        handler: (request, reply ) => {
            let data = control();
            return data;
        }
    });
    
    server.route({
        config: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        method: 'GET',
        path: '/{id}',
        handler: async (request, reply ) => {
            const id =  parseInt(request.params.id);
            let data = await control();
            return data[id];
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