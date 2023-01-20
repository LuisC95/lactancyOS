const grace = new Baby("Grace", "Female", 7.11, 19.5);

var seconds, inutes ,hours, id;
seconds = 0;
minutes = 0;
hours = 0;

var start = document.getElementById("start");
var stopW = document.getElementById("stop");
var resetW = document.getElementById("reset");

start.addEventListener("click", chrono);
stopW.addEventListener("click", stopWatch);
resetW.addEventListener("click", reset);

console.log(hours + ":" + minutes + ":" + seconds);

function chrono()
{
    id = setInterval(run, 1000);

    function run()
    {
     seconds++
     if(seconds == 6)
     {
        minutes++;
        seconds = 0;
     }
     if (minutes == 6) 
     {
         hours++;
         minutes = 0;
     }
     
     console.log(hours + ":" + minutes + ":" + seconds);   
    }
}
function stopWatch()
{
    clearInterval(id);
    id = null;
}
function reset()
{
    stopWatch();
    seconds = 0; 
    minutes = 0; 
    hours = 0; 
    console.log(hours + ":" + minutes + ":" + seconds);

}