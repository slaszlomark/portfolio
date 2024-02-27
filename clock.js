function clock() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = lessThanTen(hour);
    min = lessThanTen(min);
    sec = lessThanTen(sec);

    document.getElementById("clock").innerHTML = hour + ':' + min + ':' + sec;
    setTimeout(clock, 1000);
}

function lessThanTen(x) {
    return x < 10 ? (x = '0' + x) : x;
}