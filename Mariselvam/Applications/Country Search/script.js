let title = document.querySelector('.title');
let capital = document.querySelector('.capitalName');
let Area = document.querySelector('.areaValue');
let borderList ;


// let searchBox = document.querySelector('.input')

/* filtering the countries by user input*/

let searchBox = document.querySelector('.input');

let filterArray =[];

let filterCountry= function(){
    filterArray = [];
    let val = searchBox.value;
    console.log(val);
    document.querySelector('.countryList').innerHTML = '';
    flags.filter(e => {
        if (e.name.toLowerCase().includes(val.toLowerCase())){
            filterArray.unshift(e);
        }
    });

    if(val == ""){
        addCountries();
        console.log("delete");
    }
    // if(filterArray.length === flags.length){
    //     console.log(" added ");
    //     addCountries();
    // }
    else{
    document.querySelector('.countryList').innerHTML = '';
    filterArray.forEach(e =>{

    let country = document.createElement("div");
    country.setAttribute('class','country');
    country.setAttribute('id',`${e.iso3}`);

    let image = document.createElement('img');
    image.setAttribute('src',`${e.flag}`);
    image.setAttribute('class','flagName');
    country.appendChild(image);

    let CountryName = document.createElement('div');
    CountryName.setAttribute('class','name');
    CountryName.textContent = e.name.toUpperCase();
    country.appendChild(CountryName);

    const CS = new DocumentFragment();
    CS.appendChild(country);

        // countryOrder();

        document.querySelector('.countryList').appendChild(CS);
    })
}
}

searchBox.addEventListener('input',filterCountry);

// create country details uisng border //

let displayCountryDetails = function(e){
    let docfrag = new DocumentFragment();

    let ele = e.target.closest('li');

    countries.forEach(neighbours => {

        if (ele.id == neighbours.alpha_2){
            title.innerText = neighbours.name.toUpperCase();
            console.log(title);
            capital.innerText = neighbours.capital;
            Area.innerText = neighbours.area+' sq unit';

            borderList = neighbours.neighbours.split(",");
            console.log(borderList);

            document.querySelector('.borderList').innerHTML = "";

            createBorder();
        }
    });
}


// create border of the country 

let createBorder = function(){

    let docfrag = new DocumentFragment();

    for (let i=0; i<borderList.length; i++){
        let liElement = document.createElement('li');

        countries.forEach(country =>{
            if (country.alpha_2 == borderList[i]){
                liElement.textContent = country.name;
                liElement.setAttribute('id', `${country.alpha_2}`);
            }
        });

        docfrag.appendChild(liElement);
    }
    console.log(document.querySelector(".borderList").appendChild(docfrag));
    document.querySelector(".borderList").appendChild(docfrag);
}

// country details added 

let countryClick = function(e){
    let countryId = e.target.closest('.country');
    console.log(countryId);

    countries.forEach(e => {
        
        // console.log(e.alpha_3);

        if (countryId.id == e.alpha_3){
            console.log("hii")
            title.innerText = e.name.toUpperCase();
            console.log(title);
            capital.innerText = e.capital;
            Area.innerText = e.area+' sq unit';

            borderList = e.neighbours.split(",");
            console.log(borderList);

            document.querySelector('.borderList').innerHTML = "";

            createBorder();
        }

    });
}

document.querySelector('.countryList').addEventListener('click',countryClick);
document.querySelector('.borderList').addEventListener('click',displayCountryDetails);

