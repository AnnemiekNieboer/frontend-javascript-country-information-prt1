import axios from "axios";
console.log('Hallo daar!');

// function changeColorOfCountryName(region) {
//     const countryName = document.getElementsByClassName("country-class");
//     if (region === "Asia") {
//         countryName.classList.add("asia");
//     } if (region === "Europe") {
//         countryName.classList.add("europe");
//     } if (region === "Africa") {
//         countryName.classList.add("africa");
//     } if (region === "Americas") {
//         countryName.classList.add("america");
//     } if (region === "Oceania") {
//         countryName.classList.add("oceania") ;
//     } else {
//         countryName.classList.add("otherCountries");
//     }
// }

// function changeColorOfCountryName(region) {
//     const countryName = document.getElementsByTagName("h4");
//     if (region === "Asia") {
//         countryName.className += "asia";
//     } if (region === "Europe") {
//         countryName.className += "europe";
//     } if (region === "Africa") {
//         countryName.className += "africa";
//     } if (region === "Americas") {
//         countryName.className += "america";
//     } if (region === "Oceania") {
//         countryName.className += "oceania";
//     } else {
//         countryName.classList += "otherCountries";
//     }
// }

//Versie zonder map
async function fetchAllCountrydata() {
    try {
        const response = await axios.get("https://restcountries.com/v2/all");
        // console.log(response.data[0]);
        const responseAddedInHTML = document.getElementById("list-of-countries");

        responseAddedInHTML.innerHTML = `
        <li>
            <h4 class="country-class">${response.data[0].name}</h4>
            <p>
            Has a population of ${response.data[0].population} people
            </p>
            <img src="${response.data[0].flags.png}" alt="flag of ${response.data[0].name}">
        </li>
        `
        // changeColorOfCountryName(response.data[0].region);

        // console.log(`Regio selectie = ${response.data[0].region}`);
        // console.log(document.getElementsByTagName("h4"));
    } catch (error) {
        console.log(error)
    }
}

//versie met map
// async function fetchAllCountrydata() {
//     try {
//         const response = await axios.get("https://restcountries.com/v2/all");
//         console.log(response);
//
//         const listOfCountries = response.data;
//         console.log(listOfCountries);
//         let responseAddedInHTML = document.getElementById("list-of-countries");
//
//         listOfCountries.map((country)) => {
//             responseAddedInHTML.innerHTML += `
//             <li>
//                 <h4 class="country-class">${country.name}</h4>
//                 <p>
//                 Has a population of ${country.population} people
//                 </p>
//                 <img src="${country.flags.png}" alt="flag of ${country.name}">
//             </li>
//             `
//         }
//
//     } catch (error) {
//         console.log(error)
//     }
// }

fetchAllCountrydata();
