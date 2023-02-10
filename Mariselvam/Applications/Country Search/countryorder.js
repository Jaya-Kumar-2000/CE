let countryOrder = function(name,flag,index){

    let country = document.createElement("div");
    country.setAttribute('class','country');
    country.setAttribute('id',`${index}`);

    let image = document.createElement('img');
    image.setAttribute('src',`${flag}`);
    image.setAttribute('class','flagName');
    country.appendChild(image);

    let CountryName = document.createElement('div');
    CountryName.setAttribute('class','name');
    CountryName.textContent = name;
    country.appendChild(CountryName);

    const CS = new DocumentFragment();
    CS.appendChild(country);

    return CS;

    console.log(CS);

}


let addCountries = function(){
    let output = new DocumentFragment();

    flags.forEach(fla => {
        let Cname = fla.name.toUpperCase();

        let imgUrl = fla.flag;

        let countryIndex = fla.iso3;

        output = countryOrder(Cname,imgUrl,countryIndex);

        document.querySelector('.countryList').appendChild(output);
        console.log();
    });
}

addCountries();
console.log(addCountries());

