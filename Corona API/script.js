async function getData() {
  const input = document.getElementById("countryInput").value.toLowerCase().trim();
  const countryNameEl = document.getElementById("countryName");
  const casesEl = document.getElementById("cases");
  const deathsEl = document.getElementById("deaths");
  const recoveredEl = document.getElementById("recovered");

  if (!input) {
    alert("Please enter a state or 'india'");
    return;
  }

  try {
    const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const data = await response.json();

    if (input === "india") {
      const summary = data.data.summary;
      countryNameEl.textContent = "India";
      casesEl.textContent = summary.total;
      deathsEl.textContent = summary.deaths;
      recoveredEl.textContent = summary.discharged;
    } else {
      const stateData = data.data.regional.find(state =>
        state.loc.toLowerCase().includes(input)
      );

      if (stateData) {
        countryNameEl.textContent = stateData.loc;  
        casesEl.textContent = stateData.totalConfirmed;
        deathsEl.textContent = stateData.deaths;
        recoveredEl.textContent = stateData.discharged;
      } else {
        alert("State not found! Please check spelling (e.g., Maharashtra)");
        countryNameEl.textContent = "State";
        casesEl.textContent = "-";
        deathsEl.textContent = "-";
        recoveredEl.textContent = "-";
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Try again later.");
  }
}