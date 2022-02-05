import { format,fromUnixTime } from 'date-fns'
import { hourlyContent } from './Content'
//Everything is fucked. TOo many functions rely on each other. Not enough abstraction. 

const API_KEY = '84f24a1ea678cc630311b6ba3d6c8968'

const weather_data = {}

const formatTime = (dt) =>{
  const timestamp = fromUnixTime(dt * 1000)
  let time = new Date(timestamp).toLocaleTimeString();
  return time
}
const formatD = (dt) =>{
  const date = fromUnixTime(dt)
  const f_date = format(date, 'iiii, PPP')
  return f_date
}
export async function api(q=94066){
  let data =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&APPID=${API_KEY}`, {mode: "cors"})

  if(data.status !== 200) return 

  try{
    let respone = await data.json()
    const dt = respone.dt
    const time = formatTime(dt)
    const f_date = formatD(dt)

    let hourlyData = await getHourly(respone.coord)

    const {temp, feels_like, humidity, temp_min, temp_max} = respone.main
    let {main, description, icon} = respone.weather[0];
    const {name} = respone
    description = upperCase(description)
    weather_data['name'] = name;
    weather_data['time'] = time;
    weather_data['date'] = f_date ;
    weather_data['weather'] = main;
    weather_data['description'] = description;
    weather_data['temp'] = Math.round(temp);
    weather_data['feels_like'] = Math.round(feels_like);
    weather_data['low'] = Math.round(temp_min);
    weather_data['high'] = Math.round(temp_max);
    weather_data['humidity'] = Math.round(humidity);
    weather_data['icon_url'] = `http://openweathermap.org/img/wn/${icon}@2x.png`
    localStorage.setItem('weather', JSON.stringify(weather_data))
    return weather_data
  }
  catch(err){
    console.error(err)
  }
}

export async function getHourly(coordinates){
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=imperial&appid=${API_KEY}`,{mode: "cors"});
  let response = await data.json()
  console.log(response)
  const hourly =response.hourly 
  localStorage.setItem('hourly', JSON.stringify(hourly))
  return hourly
}

const upperCase = (str) =>{
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2
}

export {weather_data}
