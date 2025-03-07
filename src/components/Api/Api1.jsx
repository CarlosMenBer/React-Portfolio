import React, { useEffect, useState } from "react";
import './api.css'

function Api() {
    const [weather, setWeather] = useState(null);
    const apiKey = "22b446fc7b29d14f3ddbe3b864ed480b"; // Reemplaza esto con tu clave de API

    useEffect(() => {
        // Reemplaza "Madrid" con la ciudad que desees
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric&lang=es`)
        .then((response) => response.json())
        .then((data) => {
            setWeather(data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
    }, []);

    return (
        <div className="apicomponent" id="Api">
            <h2>Datos del Clima</h2>
            {weather ? (
                <div className="weather">
                    <h3>{weather.name}</h3>
                    <p>Temperatura: {weather.main.temp}°C</p>
                    <p>Descripción: {weather.weather[0].description}</p>
                    <p>Humedad: {weather.main.humidity}%</p>
                </div>
            ) : (
                <p>Cargando datos del clima...</p>
            )}
        </div>
    );
}

export default Api;
