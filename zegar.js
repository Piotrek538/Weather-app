function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    h = checkTime(h);
    m = checkTime(m);

    document.getElementById("zegar").innerHTML = h + ":" + m;

    
}
function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}
setTimeout(startTime,500);