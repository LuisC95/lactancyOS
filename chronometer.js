class Chronometer
{
    constructor()
    {
        this.startTime = document.getElementById("start");
        this.resetTime = document.getElementById("reset"); 
    }
    tempo()
    {
        var seconds = 0;
        var minutes = 0; 
        var hours = 0;
        var timeOut = 60; 
        var timerTouch = 0;
        var timesTouchted = 2;
        var id;

        this.startTime.addEventListener("click", chrono);
        this.resetTime.addEventListener("click", resetWatch);

        function resetWatch()
        {
            stopWatch();
            seconds = 0; 
            minutes = 0; 
            hours = 0; 
            console.log(hours + ":" + minutes + ":" + seconds);
            if (timerTouch == timesTouchted) 
            {
                timerTouch++
            }
        }

        function stopWatch(status)
        {
            clearInterval(id);
            id = null;
            status = "pause";
            console.log(status);
        }

        function chrono(e)
        {
            timerTouch++
            timerTouch = timerTouch % timesTouchted;
            if(timerTouch == 1)
            {
                id = setInterval(run, 1000);
                function run()
                {
                    seconds++
                    if(seconds == timeOut)
                    {
                        minutes++;
                        seconds = 0;
                    }
                    if (minutes == timeOut) 
                    {
                        hours++;
                        minutes = 0;
                    }

                    console.log(hours + ":" + minutes + ":" + seconds);   
                }
            }
            else if(timerTouch == 0)
            {
                stopWatch();
            }
        }
    }
}
