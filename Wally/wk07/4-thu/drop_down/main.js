
var cityAbb = [".nyc", ".sf", ".la", ".austin", ".sydney"];
var city = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"];

//  fill drop down with cities
function cityDropDown(cityNames, cityAbbreviations ) {
  for (i = 0; i < city.length; i++) {
    var selectCity = document.querySelector("#city-type");
    var option = document.createElement("option");
    option.text = cityNames[i];
    cityTemp = cityAbbreviations[i].replace(/[^a-z]+/gi,'');
    option.className = cityTemp;
    selectCity.add(option);
  }
}

cityDropDown(city, cityAbb);

// element for event listening
var cityElement = document.querySelector("#city-type");
// function to select city and change body class to render background image of selected city
var changeBackground = function() {
// remove any existing body classes to allow for reselection
  for (i = 0; i < cityAbb.length; i++) {
    cityTemp = cityAbb[i].replace(/[^a-z]+/gi,'');
    document.querySelector("body").classList.remove(cityTemp);
  }
// add selected city class to body
  for (i = 0; i < cityAbb.length; i++) {
    var abbString = cityAbb[i].replace(/[^a-z]+/gi,'');
    if (document.querySelector(cityAbb[i]).selected == true) {
      document.querySelector("body").classList.add(abbString);
    }
  }
};

cityElement.addEventListener("change", changeBackground);

// thats all folks
