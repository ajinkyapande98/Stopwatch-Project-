
//  Storing value in to the variables
let min = 00;
let sec = 00;
let tens = 00;
const getMin = document.getElementById('min');
const getSec = document.getElementById('sec');
const getTens = document.getElementById('tens');
let interval;


// This function will Start the Stopwatch
let start = ()=>{
    clearInterval(interval);
    interval = setInterval(startStopWatch,10);
     
}


// This function will pause the Stopwatch
let stop = ()=>{
    clearInterval(interval);
}

// This reset Function reset the StopWatch
let reset = ()=>{
    clearInterval(interval);
    min = '00';
    sec = '00';
    tens = '00';
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getTens.innerHTML = tens;  
}



// All  main code of Stopwatch is here

let startStopWatch = ()=>{
    tens++;
if(tens <= 9){
    getTens.innerHTML = '0'+tens;
}
if(tens > 9){
    getTens.innerHTML = tens;
}
if(tens > 99){
    sec++;
    getSec.innerHTML = '0'+sec;
    tens = 0;
    getTens.innerHTML = '0'+0;
}
if(sec > 9){
    getSec.innerHTML = sec;
}
if(sec > 59 ){
    min++;
    getMin.innerHTML = '0'+min;
    sec = 0;
    getSec.innerHTML = '0'+ 0;
}
if(min > 9){
    getMin.innerHTML = min;
}
}
