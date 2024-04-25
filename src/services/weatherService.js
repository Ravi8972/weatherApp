import axios from "axios";


async function getCityCoords(city) {
  try {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
     const {
      coord,
      sys: { country },
    } = response.data;
    return { ...coord, country };
  } catch (error) {
    console.log("Error in getting city coordinates", error);
    throw new Error(`Unable to retrieve the weather data for ${city}`);
   }

}

async function getCityName(lon, lat) {
   try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
  const {
    name,
    sys: { country },
  } = response.data;
  return { name, country };
   } catch (error) {
     throw  new Error(`Unable to find a city with this longitude and latitude`);
   }
}

async function getWeather(lon, lat) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw  new Error(`Unable to retrieve the weather data for this location.`);
  }
}

export { getCityCoords, getCityName };
export default getWeather;