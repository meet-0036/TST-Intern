'use strict';

// CORS : Cross-Origin Resource Sharing
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
  
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
  
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>1 ${data.currencies[0].symbol}</span>${data.currencies[0].code}</p>
      </div>
    </article>
    `;
    console.log(data.languages[0].symbol);
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  };
  
  getCountryData('bharat');
  getCountryData('china');
  getCountryData('canada');
  getCountryData('germany');
  getCountryData('portugal');
  getCountryData('usa');
