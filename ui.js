class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.desc = document.getElementById('w-desc');
        this.pressure = document.getElementById('w-pressure');
        this.icon = document.getElementById('w-icon');
    }

    kelToCel(kel) {
        return parseInt(kel - 275.15).toFixed(2);
    }

    paint(weather){
        console.log(weather);
        this.location.textContent = weather.name;
        this.icon.innerHTML = weather.description;
        this.desc.innerHTML = `Feels Like: ${this.kelToCel(weather.main.feels_like)} &deg;C`;
        this.temp.innerHTML = `Temperature: ${this.kelToCel(weather.main.temp)} &deg;C`;
        this.pressure.innerHTML = `Pressure: ${parseInt(this.kelToCel(weather.main.pressure))} %`;
    }

}

