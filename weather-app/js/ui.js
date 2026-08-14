function getWeatherState(weather) {
  if (weather.isDay === 0) {
    return "night";
  }

  if (weather.code === 0) {
    return "sunny";
  }

  if ([1, 2, 3].includes(weather.code)) {
    return "cloudy";
  }

  if ([45, 48].includes(weather.code)) {
    return "fog";
  }

  if ([51, 53, 55, 56, 57].includes(weather.code)) {
    return "drizzle";
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weather.code)) {
    return "rainy";
  }

  if ([71, 73, 75, 77, 85, 86].includes(weather.code)) {
    return "snowy";
  }

  if ([95, 96, 99].includes(weather.code)) {
    return "storm";
  }

  return "cloudy";
}
const WEATHER_STATES = {
  sunny: {
    className: "sunny",
    animal: "./src/renderer/assets/animal/pokemon sun.png",
    icon: "./src/renderer/assets/weather/sun.png",
    message: "it's sunny today"
  },

  drizzle: {
    className: "drizzle",
    animal: "./src/renderer/assets/animal/pokeomn cloudy.png",
    icon: "./src/renderer/assets/weather/rain.png",
    message: "it's drizzling today"
  },

  cloudy: {
    className: "cloudy",
    animal: "./src/renderer/assets/animal/pokemon cloudy.png",
    icon: "./src/renderer/assets/weather/cloud.png",
    message: "it's cloudy today"
  },

  rainy: {
    className: "rainy",
    animal: "./src/renderer/assets/animal/pokemon rain.png",
    icon: "./src/renderer/assets/weather/rain.png",
    message: "it's rainy today"
  },

  storm: {
    className: "storm",
    animal: "src/renderer/assets/animal/espeon.png",
    icon: "src/renderer/assets/weather/storm.png",
    message: "it’s stormy today"
  },
   fog: {
    className: "fog",
    animal: "src/renderer/assets/animal/candle.png",
    icon: "src/renderer/assets/weather/fog.png",
    message: "it’s foggy today"
  },

  night: {
    className: "night",
    animal: "./src/renderer/assets/animal/night.png",
    icon: "./src/renderer/assets/weather/moon.png",
    message: "it's night now"
  }
};
function updateUI(weather) {
  const card = document.getElementById("card");
  const animal = document.getElementById("animal");
  const weatherIcon = document.getElementById("weatherIcon");
  const message = document.getElementById("message");

  const stateName = getWeatherState(weather);
  const state = WEATHER_STATES[stateName];

  card.className = `card ${state.className}`;
  animal.src = state.animal;
  weatherIcon.src = state.icon;
  message.textContent = `${state.message} • ${weather.temperature}°C`;
}