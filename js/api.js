const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayContries(data));
}
loadCountries();

const displayContries = contries =>{
    const countryContainer = document.getElementById('countries');
    for(const country of contries){
       // console.log(country.capital);
       const div = document.createElement('div');
       div.classList.add('county');
       div.innerHTML= `
       <h3>${country.name.common}</h3>
       <p>${country.capital}</p>
       <button onclick="loadDatails('${country.name.common}')" >Details</button>
       `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
         countryContainer.appendChild(div);
    }
};

const loadDatails = name => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
  .then(res => res.json())
  .then(data => loadDatailsCountries(data[0]));
//   console.log(url);
};

const loadDatailsCountries = country => {
    console.log(country);
   const countryDetails = document.getElementById('country-details');
   countryDetails.innerHTML = `
   <h4>${country.name.common}</h4>
    <p>population: ${country.population} </p>
    <img width= "200px" src="${country.flags.svg}">
   `
}

