async function getWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=-25.43&longitude=-49.27&current=temperature_2m,weather_code,is_day&timezone=America%2FSao_Paulo";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro na API");
  }

  const data = await response.json();

  return {
    city: "Curitiba",
    temperature: Math.round(data.current.temperature_2m),
    code: data.current.weather_code,
    isDay: data.current.is_day
  };
}