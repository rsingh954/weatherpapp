export class manageLocal{
  static getWeatherData(){
      let weather;
      if(localStorage.getItem('weather') == null){
        weather = {}
      }else{
        weather = JSON.parse(localStorage.getItem('weather'))
      }
      return weather
  }
  static getHourlyWeatherData(){
    let hourlyWeather;
    if(localStorage.getItem('hourly') == null){
      hourlyWeather = {}
    }else{
      hourlyWeather = JSON.parse(localStorage.getItem('hourly'))
    }
    return hourlyWeather;
}
}