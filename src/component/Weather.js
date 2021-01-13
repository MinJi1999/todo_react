import * as React from 'react';

const COORDS = "coords";
const API_KEY = "eeefe5acc39c4c4049be76dcb6b2bcc2";


function Weather() {
    const [weather, setWeather] = React.useState('');
    const [redWaterValue, setRedWaterValue] = React.useState('');
    const redWaterStyle = {
        marginTop : redWaterValue
    }
    function getWeather(lat, lng) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function (response) {
            return response.json();
        }).then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            setRedWaterValue((temperature * -2.5) + 58);
            setWeather(`${temperature}º\n@${place}`);
        })
    }

    function saveCoords(coordsObj) {
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }

    function handleGeoSuccess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude: latitude,
            longitude: longitude
        };
        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }

    function handleGeoError() {
        console.log(`Can't access geo location`);
    }

    function askForCoords() {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    }

    function loadCoords() {
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords === null) {
            askForCoords();
        } else {
            const parseCoords = JSON.parse(loadedCoords);
            getWeather(parseCoords.latitude, parseCoords.longitude);
        }
    }

    function init() {
        loadCoords();
    }

    React.useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div className="temps">
                <div className="tempsNum">40º</div>
                <div className="tempsNum">30º</div>
                <div className="tempsNum">20º</div>
                <div className="tempsNum">10º</div>
                <div className="tempsNum">0º</div>
                <div className="tempsNum">-10º</div>
                <div className="tempsNum">-20º</div>
            </div>
            <div className="weather-container">
            <span className="js-weather weather">{weather}</span>
            <div className="thermometer">
                <div className="thermometerInside">
                    <span style={redWaterStyle}className="red-water"></span>
                </div>
            </div>
            <div className="white-circle"></div>
        </div>
        <div className="red-circle"></div>

        </>
    )
}

export default Weather;