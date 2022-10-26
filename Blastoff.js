// variables
var currTime=10;
//alert
alert("Warning! This page is for Mission Control Personnel Only!")
// functions
function countdown() 
{
    for(var i=0; i<=11; i++)
    {
        if (i == 11) 
        {
            setTimeout(function ()
            {
                //code goes here for timer
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } 
        else 
        {
            setTimeout(function ()
            {
                document.getElementById("countdownDisplay").innerHTML = currTime + " seconds remaining";
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}