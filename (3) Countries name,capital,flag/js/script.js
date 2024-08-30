function reqListener(){
    let countryarr = JSON.parse(this.responseText);
    countryarr.forEach(element => {
        console.log(element.name.common);
        console.log(element.capital);
        console.log(element.flags.png);

        
    });
    console.log(countryarr)
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();