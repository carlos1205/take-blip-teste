const repo = require('../data/repo');

const get = async () => {
    const objs = await repo();
    let response = new Array();

    for(let i = 0; i < objs.data.length; i++){
        const repositorio = {
            name: objs.data[i].full_name,
            description: objs.data[i].description
        }

        response.push(repositorio);
    }

    return response;
}

module.exports = get;