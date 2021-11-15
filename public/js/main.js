const submitbtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");
const temp_id = document.getElementById("temp_id");
const datahide = document.querySelector(".data_hide");

// submit btn function for weather app details in  the box
const getInfo = async (event) => {
  event.preventDefault();
  let cityValue = cityName.value;

  if (cityValue === "") {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https: 0//api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=c8d1779250bdfd7174967dd6db50ef0f`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp_id.innerText = Math.floor(arrData[0].main.temp - 273.5);
      city_name = `${arrData[0].name}, ${arrData[0].sys.country}`;

      const tempMod = arrData[0].weather.main;
      if ((tempMod = "Sunny")) {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color: #eccc68"></i>';
      } else if (tempMod == "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color:#dfe4ea"></i>';
      } else if (tempMod == "Rainy") {
        temp_status.innerHTML =
          '< class="fas fa-cloud-rain" style="color: #eccc68"></i>';
      } else if (tempMod == "Haze") {
        temp_status.innerHTML =
          '< class="fas fa-smog" style="color: #eccc68"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color: #eccc68"></i>';
      }
      datahide.classList.remove("data_hide");
    } catch (error) {
        
      city_name.innerText = `We Faild To Find  ${cityValue} City Properly.Enter The Current Name Please!`;
    }
  }
};

submitbtn.addEventListener("click", getInfo);
