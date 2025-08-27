async function getWeather() {
  const apiKey = "0e1291b2b88c4246af4191022252608"; 
  const city = document.getElementById("cityInput").value || "London"; 


  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    // Weather data show
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡 Temperature: ${data.current.temp_c}°C</p>
      <p>🌥 Condition: ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="weather icon" />
    `;
  } catch (err) {
    document.getElementById("weatherResult").innerHTML =
      "<p style='color:red'>City not found or invalid request!</p>";
  }
}
