const weather = new Weather();
const ui = new UI;

const uiForm = document.getElementById('form');
const uiSelect = document.getElementById('changeCity').value;

weather.getWeather(uiSelect)
.then(data => {
    ui.paint(data);
})
.catch(err => {
    console.log(err);
});

uiForm.addEventListener('change',function(e){
    weather.getWeather(e.target.value)
    .then(data => {
        ui.paint(data);
    })
    .catch(err => {
        console.log(err);
    });
    });