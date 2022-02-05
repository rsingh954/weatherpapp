
export async function renderWeatherData(data){
  const weather =  await data;

  const img = document.querySelector('.placeholder')
  img.src = weather.icon_url;

  const title = document.querySelector('.title')
  title.textContent = weather.name

  const info = document.querySelector('.info-holder')


  const description = document.querySelector('.description')
  const temp =        document.querySelector('.temp')
  const feels_like =  document.querySelector('.feels_like')
  const low =         document.querySelector('.low')
  const high =        document.querySelector('.high')
  const humidity =    document.querySelector('.humidity')
  const time =    document.querySelector('.time')
  const date =    document.querySelector('.date')

  description.textContent =  weather['description'];
  temp.textContent        =  weather['temp'] 
  temp.innerHTML       += ' &#176' + 'F'
  feels_like.textContent  =  weather['feels_like']
  feels_like.innerHTML += ' &#176' + 'F'
  low.textContent     =      weather['low']
  low.innerHTML        += ' &#176' + 'F'
  high.textContent    =      weather['high']
  high.innerHTML       += ' &#176' + 'F'
  humidity.textContent    =  weather['humidity']+"%"
  time.textContent    =      weather['time'];
  date.textContent    =      weather['date'];

}
