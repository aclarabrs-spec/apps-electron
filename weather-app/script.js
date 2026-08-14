async function carregarClima() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=-25.43&longitude=-49.27&current=temperature_2m,weather_code,is_day";

  const resposta = await fetch(url);
  const dados = await resposta.json();

  const codigo = dados.current.weather_code;
  const temperatura = Math.round(dados.current.temperature_2m);
  const isDay = dados.current.is_day;

  mudarApp(codigo, temperatura, isDay);
}

function mudarApp(codigo, temperatura, isDay) {
  const card = document.getElementById("card");
  const message = document.getElementById("message");

  card.className = "card";

  if (isDay === 0) {
    card.classList.add("night");
    message.textContent = `it's night now • ${temperatura}°C`;
    return;
  }

  if (codigo === 0) {
    card.classList.add("sunny");
    message.textContent = `it's sunny today • ${temperatura}°C`;
  } else if ([1, 2, 3, 45, 48].includes(codigo)) {
    card.classList.add("cloudy");
    message.textContent = `it's cloudy today • ${temperatura}°C`;
  } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(codigo)) {
    card.classList.add("rainy");
    message.textContent = `it's rainy today • ${temperatura}°C`;
  } else {
    card.classList.add("cloudy");
    message.textContent = `weather is changing • ${temperatura}°C`;
  }
}

carregarClima();