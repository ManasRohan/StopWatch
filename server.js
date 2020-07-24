let seconds=0;
let minutes=0;

let displaySeconds=0;
let displayMinutes=0;

let interval="null";
let status="stopped";


function StopWatch(){
    seconds++;
    if(seconds/60===1)
    {
        seconds=0;
        minutes++;
    }
    if(seconds<10)
    {
        displaySeconds="0"+seconds.toString();
    }
    else
    {
        displaySeconds=seconds;
    }
    if(minutes<10)
    {
        displayMinutes="0"+minutes.toString();
    }
    else
    {
        displayMinutes=minutes;
    }
    if(displayMinutes==="05" && displaySeconds=== "01")
    {
        let str="00:00";
        document.getElementById("display").innerHTML =str.fontcolor("red");
        document.getElementById("StartPause").innerHTML ="Reset";
        window.clearInterval(interval);
        status="reset";
    }
    else{
    document.getElementById("display").innerHTML=displayMinutes + ":" +displaySeconds;
    }
}

   

function StartPause()
{
    if(status === "stopped")
    {
        interval=window.setInterval(StopWatch, 1000);
        document.getElementById("StartPause").innerHTML = "Pause";
        status="start";
    }
    else if(status==="reset")
    {
        document.getElementById("display").innerHTML ="00:00";
        seconds=0;
        minutes=0;
        document.getElementById("StartPause").innerHTML ="Start";
        status="stopped";
    }
    else
    {
        window.clearInterval(interval);
        document.getElementById("StartPause").innerHTML ="Start";
        status="stopped";

    }
}