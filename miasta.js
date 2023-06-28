var katowice = document.getElementById("katowice");
var poznan = document.getElementById("poznan");
var krakow = document.getElementById("krakow");
var warszawa = document.getElementById("warszawa");
var gdansk = document.getElementById("gdansk");
var wroclaw = document.getElementById("wroclaw");

var tempValue = document.getElementById("temp-value");
var wiatrValue = document.getElementById("wiatr-value");
var wilgotnoscValue = document.getElementById("wilgotnosc-value");
var wschodValue = document.getElementById("wschod-value");
var zachmValue = document.getElementById("zachmurzenie-value");
var zachodValue = document.getElementById("zachod-value");

function Katowice(){
    katowice.classList.add("katowice");

    poznan.classList.remove("poznan");
    krakow.classList.remove("krakow");
    warszawa.classList.remove("warszawa");
    gdansk.classList.remove("gdansk");
    wroclaw.classList.remove("wroclaw");

    tempValue.innerHTML = "21 &#176C";
    wiatrValue.innerHTML = "21 km/h";
    wilgotnoscValue.innerHTML = "45 %";
    wschodValue.innerHTML = "05:04";
    zachmValue.innerHTML = "0 %";
    zachodValue.innerHTML = "22:04";
}
function Poznan(){
    poznan.classList.add("poznan");

    katowice.classList.remove("katowice");
    krakow.classList.remove("krakow");
    warszawa.classList.remove("warszawa");
    gdansk.classList.remove("gdansk");
    wroclaw.classList.remove("wroclaw");

    tempValue.innerHTML = "23 &#176C";
    wiatrValue.innerHTML = "17 km/h";
    wilgotnoscValue.innerHTML = "34 %";
    wschodValue.innerHTML = "05:07";
    zachmValue.innerHTML = "3 %";
    zachodValue.innerHTML = "22:07";

}
function Krakow(){
    krakow.classList.add("krakow");

    poznan.classList.remove("poznan");
    katowice.classList.remove("katowice");
    warszawa.classList.remove("warszawa");
    gdansk.classList.remove("gdansk");
    wroclaw.classList.remove("wroclaw");

    tempValue.innerHTML = "27 &#176C";
    wiatrValue.innerHTML = "13 km/h";
    wilgotnoscValue.innerHTML = "31 %";
    wschodValue.innerHTML = "06:07";
    zachmValue.innerHTML = "13 %";
    zachodValue.innerHTML = "22:10";
}
function Warszawa(){
    warszawa.classList.add("warszawa");

    krakow.classList.remove("krakow");
    poznan.classList.remove("poznan");
    katowice.classList.remove("katowice");
    gdansk.classList.remove("gdansk");
    wroclaw.classList.remove("wroclaw");

    tempValue.innerHTML = "29 &#176C";
    wiatrValue.innerHTML = "16 km/h";
    wilgotnoscValue.innerHTML = "36 %";
    wschodValue.innerHTML = "04:07";
    zachmValue.innerHTML = "17 %";
    zachodValue.innerHTML = "22:13";

}
function Gdansk(){
    gdansk.classList.add("gdansk");

    warszawa.classList.remove("warszawa");
    krakow.classList.remove("krakow");
    poznan.classList.remove("poznan");
    katowice.classList.remove("katowice");
    wroclaw.classList.remove("wroclaw");

    tempValue.innerHTML = "34 &#176C";
    wiatrValue.innerHTML = "17 km/h";
    wilgotnoscValue.innerHTML = "32 %";
    wschodValue.innerHTML = "04:10";
    zachmValue.innerHTML = "18 %";
    zachodValue.innerHTML = "22:23";
}
function Wroclaw(){
    wroclaw.classList.add("wroclaw");

    warszawa.classList.remove("warszawa");
    krakow.classList.remove("krakow");
    poznan.classList.remove("poznan");
    gdansk.classList.remove("gdansk");
    katowice.classList.remove("katowice");

    tempValue.innerHTML = "32 &#176C";
    wiatrValue.innerHTML = "13 km/h";
    wilgotnoscValue.innerHTML = "31 %";
    wschodValue.innerHTML = "04:34";
    zachmValue.innerHTML = "14 %";
    zachodValue.innerHTML = "22:45";
}









