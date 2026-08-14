async function startApp() {
  try {
    console.log("Iniciando app...");

    const weather = await getWeather();

    console.log("Weather recebido:", weather);

    updateUI(weather);

  } catch (error) {
    console.error("ERRO REAL:", error);
    alert(error.message);
    document.getElementById("message").textContent = "weather error";
  }
}

startApp();

setInterval(startApp, 15 * 60 * 1000);