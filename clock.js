
function updateClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = "AM";

    if(h>=12){
            ampm = "PM"
        }

    if(h>12){
        h = h - 12;
    }

    

    h = h < 10 ? "0"+h : h;
    m = m < 12 ? "0"+m : m;
    s = s < 12 ? "0"+s : s;



    // var time = h + ":" + m + ":" + s + " " + ampm;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    document.getElementById("ampm").innerHTML = ampm;
    setTimeout(updateClock, 1000);
}


