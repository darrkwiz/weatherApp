class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.desc = document.getElementById('w-desc');
        this.pressure = document.getElementById('w-pressure');
    }

    kelToCel(kel) {
        return parseInt(kel - 275.15).toFixed(2);
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.innerHTML = `Feels Like: ${this.kelToCel(weather.main.feels_like)} &deg;C`;
        this.temp.innerHTML = `Temperature: ${this.kelToCel(weather.main.temp)} &deg;C`;
        this.pressure.innerHTML = `Pressure: ${parseInt(this.kelToCel(weather.main.pressure))} %`;
    }

}

