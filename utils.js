export function weatherApi(query){
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&mode=json&units=metric&APPID=a1be9deacf14c15472775a38c10194ac';
    fetch(url)
    .then(res => res.json())
    .then((response) => {
        return response
    })
}
