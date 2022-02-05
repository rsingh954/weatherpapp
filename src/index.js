import './styles.css'
import {api, getHourly} from './components/API'
import { renderWeatherData } from './components/Events'
import { manageLocal } from './components/LocalStorage'
import { hourlyContent } from './components/Content'
import { format,fromUnixTime } from 'date-fns'

const init_data = manageLocal.getWeatherData()
const hourly = manageLocal.getHourlyWeatherData()
console.log(hourly)

renderWeatherData(init_data)

const icon = document.querySelector('.search-icon')
const searchBar = document.querySelector('.search-bar')
//DEFAULT

icon.onclick = async function(){
  const search_value = document.querySelector('.search-bar').value;
  const data = await getData(search_value);
}

searchBar.addEventListener('keydown', e =>{
  const search_value = document.querySelector('.search-bar').value;
  if(e.key === "Enter"){ getData(search_value) }
})

async function getData(value){
  const data = await api(value)
  renderWeatherData(data)
  return data;
}
const formatTime = (dt) =>{
  const timestamp = fromUnixTime(dt * 1000)
  let time = new Date(timestamp).toLocaleTimeString();
  return time
}

  hourly.forEach((hour, i) => {
    const temp = Math.round(hour.temp)
    const description = hour.weather[0].description
    const icon = hour.weather[0].icon
    const time = formatTime(hour.dt)
    hourlyContent(temp, description, icon, time)
  })  


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
