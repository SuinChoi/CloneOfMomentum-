const clock = document.getElementById("clock");

//Interval은 특정시간마다 뭔가를 반복할때 쓰임
getClock();                             // call function immediately -> if we don't have this, the clock starts in 1 sc
setInterval(getClock, 1000);            // every 1 sc, call the function


function getClock(){
    const date = new Date();

    // Date is number so transform to String for using padStart
    // padStart는 적어도 두자리수를 보장해줌 ex) 1 -> 01
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =  `${hours}:${minutes}:${seconds}` ;
}
