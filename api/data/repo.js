const axios = require('axios');

const getRepos = async () => {
    try{
        return await axios.get('https://api.github.com/users/takenet/repos?language=C%23&sort=update&per_page=5&direction=asc');    
    }catch(err){
        console.error(err);
    }
}

module.exports = getRepos;