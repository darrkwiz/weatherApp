class Weather {
    constructor(city) {
        this.appid = 'a916c62677b0c33c92dc296b06dc37db'
    }

    async getWeather(city){
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}`;
        const weather = await fetch(URL);
        const w_current = await weather.json();
        return w_current
    }

    changeCity(city) {
        this.getWeather(city);
        console.log(city);
    }
}