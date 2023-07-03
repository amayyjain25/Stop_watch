var hr=0;
var min=0;
var sec=0;
var msec=0;
var time=false;

/*FUNCTION DEFINITION*/



function Start(){
    time=true;
    stopwatch();
}

function Stop(){
    time=false;
}
function Reset(){
    time=false;
    hr=0;
    min=0;
    sec=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("msec").innerHTML="00";
    
}
function stopwatch(){
    if(time==true){
        msec=msec+1;
        
        if(msec==100){
            sec=sec+1;
            msec=0;
            
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }    
        if(min==60){
            hr=hr+1;
            min=0;
           
        }
        var strhr=hr;
        var strmin=min;
        var strsec=sec;
        var strmsec=msec;

        if(hr<10){
            strhr="0" + strhr
        }
        if(min<10){
            strmin="0" + strmin
        }
        if(sec<10){
            strsec="0" + strsec
        }
        if(msec<10){
            strmsec="0" + strmsec
        }

        document.getElementById("hr").innerHTML=strhr;
        document.getElementById("min").innerHTML=strmin;
        document.getElementById("sec").innerHTML=strsec;
        document.getElementById("msec").innerHTML=strmsec;


    setTimeout("stopwatch()",10)
    

    }
}