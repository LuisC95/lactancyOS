const grace = new Baby("Grace", "Female", 7.11, 19.5);

let millisec = 0;
let sec = 0; 
let min = 0;
let hours = 0;

 function chrono()
 {
    millisec++
    if(millisec > 99)
    {
        millisec = 0;
        sec++
        if(sec > 60)
        {
            sec = 0;
            min++
            if(min = 5)
            {
                millisec = 'l';
            }
        }
    }
    console.log(min, sec, millisec)
 }

 chrono();

console.log(millisec, sec, min, hours)