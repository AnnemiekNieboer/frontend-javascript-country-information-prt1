import axios from "axios";
console.log('Hallo daar!');

function changeColorOfCountryName(region) {
    switch(region) {
        case "Asia":
            return "asia";
        case "Europe":
            return "europe";
        case "Africa":
            return "africa";
        case "Americas":
            return "america"
        case "Oceania":
            return "oceania"
        default:
            return "otherCountries"
    }
}


//Versie zonder map
// async function fetchAllCountrydata() {
//     try {
//         const response = await axios.get("https://restcountries.com/v2/all");
//         // console.log(response.data[0]);
//         const responseAddedInHTML = document.getElementById("list-of-countries");
//
//         responseAddedInHTML.innerHTML = `
//         <li>
//             <h4 class="country-class">${response.data[0].name}</h4>
//             <p>
//             Has a population of ${response.data[0].population} people
//             </p>
//             <img src="${response.data[0].flags.png}" alt="flag of ${response.data[0].name}">
//         </li>
//         `
//         // changeColorOfCountryName(response.data[0].region);
//
//         // console.log(`Regio selectie = ${response.data[0].region}`);
//         // console.log(document.getElementsByTagName("h4"));
//     } catch (error) {
//         console.log(error)
//     }
// }

// versie met map
async function fetchAllCountrydata() {
    try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const countries = response.data;
        countries.sort((a,b) => {
            return a.population - b.population;
        });
        countryList(countries);

    } catch (error) {
        console.log(error)
    }
}

fetchAllCountrydata();

function countryList(countries) {
    let responseAddedInHTML = document.getElementById("list-of-countries");

    responseAddedInHTML.innerHTML = countries.map((country) => {
        return `
            <li>
                <h4 class="${changeColorOfCountryName(country.region)}">${country.name}</h4>
                <p>
                Has a population of ${country.population} people
                </p>
                <img src="${country.flags.png}" alt="flag of ${country.name}">
            </li>
            `;
    } ).join("");
}


