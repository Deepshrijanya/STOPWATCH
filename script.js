let display = document.querySelector('#display');
let lapshow = document.querySelector('#lapshow');

let startbtn = document.querySelector('#start');
let stopbtn = document.querySelector('#stop');
let resetbtn = document.querySelector('#reset');
let lapbtn = document.querySelector('#lap');

startbtn.addEventListener('click',start);
stopbtn.addEventListener('click',stop);
resetbtn.addEventListener('click',reset);
lapbtn.addEventListener('click',lap);

let hr = 0, min = 0, sec = 0;
let str;

function increase(){
    sec++;
    if(sec > 60){
        sec = 0;
        min++;
        if(min > 60){
            min = 0;
            hr++;
        }
    }
    if(hr < 10 ) str = "0" + hr;
    else str = hr;

    if(min < 10) str += "::0" + min;
    else str += "::" + min;

    if(sec < 10) str += "::0" + sec;
    else str += "::" + sec;
    
    display.innerHTML = str;
};

let flag;
function start(){
    flag = setInterval(increase,1000);
    startbtn.disabled = true;
    stopbtn.disabled = false;
    resetbtn.disabled = false;
    lapbtn.disabled = false;
    
}
function stop(){
    clearInterval(flag);
    stopbtn.disabled = true;
    startbtn.disabled = false;
}
function reset(){
    stop();
    resetbtn.disabled = true;
    lapbtn.disabled = true;
    lapshow.innerHTML = "";
    hr = min = sec = 0;
    display.innerHTML = "00::00::00";
}
function lap(){
    let lapdiv = document.createElement('div');
    lapdiv.innerHTML = display.innerHTML;
    lapdiv.style.marginBottom = "10px";
    lapdiv.style.fontSize = "20px";
    lapshow.prepend(lapdiv);

}

