function searchCountry() {
  let searchValue = document.getElementById("txtSearch").value;
  let errorDisplay = document.getElementById("txtErrorDisplay");

  let countryName = document.getElementById("countryName");
  let countryIcon = document.getElementById("countryIcon");
  let countryCapital = document.getElementById("countryCapital");
  let countryPopulation = document.getElementById("countryPopulation");
  let countryLocation = document.getElementById("countryLocation");
  let countryTimezone = document.getElementById("countryTimezone");
  let countryArea = document.getElementById("countryArea");

  if (!searchValue) {
    errorDisplay.classList.remove("d-none");
    errorDisplay.innerText = "Please enter a location to search";
  } else {
    errorDisplay.classList.add("d-none");
    errorDisplay.innerText="";
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((obj) => {
          countryName.innerText = obj.name.official;
          countryIcon.innerHTML = `<img src="${obj.flags.png}" alt="" style="width: 50px; height: 30px">`;
          countryCapital.innerText = obj.capital;
          countryPopulation.innerText = obj.population;
          countryLocation.innerText = obj.latlng;
          countryTimezone.innerText = obj.timezones;
          countryArea.innerText = obj.area;
        });
      });
  }
}
