const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayContries(data));
}
loadCountries();
//display countries
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


