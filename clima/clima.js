const axios = require('axios');


const getClima = async (lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=28d1d163353cc84fb53f3f714556c486&units=metric`);
    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}