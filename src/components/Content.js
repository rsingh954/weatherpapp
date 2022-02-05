export const content = () => {

  const wrapper = document.createElement("div")
  wrapper.classList.add('content-wrapper')

  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('title-wrapper')
  const title = document.createElement('div')
  title.classList.add('title')
  titleWrapper.appendChild(title)
  
  const placeholderImg = document.createElement('img')
  placeholderImg.classList.add('placeholder')

  const informationHolder = document.createElement('div');
  informationHolder.classList.add("info-holder")



  wrapper.appendChild(placeholderImg)
  wrapper.appendChild(informationHolder)
  document.body.appendChild(wrapper)
}

export const hourlyContent = (temperature,desc, icon, t) =>{
  const hourlyContainer = document.querySelector('.hourly-container')
  const forecastTitle = document.querySelector('.forecast-type')
  forecastTitle.textContent = "4 Hour Forecast"
  const wrapper = document.createElement('div')
  wrapper.classList.add('h-wrap')

  const time = document.createElement('h3')
  time.classList.add('h-temp')
  time.textContent = t
  
  const left = document.createElement('div')
  left.classList.add('h-left')
  
  const img = document.createElement('img')
  img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

  left.appendChild(img)

  const right = document.createElement('div')
  const temp = document.createElement('h4')
  temp.classList.add('h-temp')
  temp.textContent = temperature
  temp.innerHTML += ' &#176' + 'F'

  const description = document.createElement('div')
  description.classList.add('h-description')
  description.textContent = desc
  right.appendChild(temp)
  right.appendChild(description)
  wrapper.appendChild(time)
  wrapper.appendChild(left)
  wrapper.appendChild(right)
  hourlyContainer.appendChild(wrapper)
  return wrapper
}