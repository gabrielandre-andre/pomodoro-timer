$(function(){
    
    var minute = 25;
    var secunds = 00;

    var okok = 0;

    var click = 0;

    var functionInterval = 0;

    function time(){
        setInterval(function(){

            if(okok == 1){
                secunds = secunds + 1;
            }


            



            if(secunds == 00){
                secunds = 60;
                minute = minute - 1;
            }
    
    
            secunds = secunds - 1;
    
    
            if(secunds < 10){
                secunds = '0'+secunds;
            }
    
            $('.time h1').html(minute+':'+secunds);


            if(minute == 0 && secunds == 0){
                minute = 5;
                secunds = 00;
                functionInterval = 1;
            }
            

            
        },1000);
    }






    $('.inputs input:nth-of-type(1)').click(function(){
        click = click + 1;

        if(click == 1){
            alert('Timer iniciado!');
            time();
            okok = 0;
        }else{
            okok = 0;
        }
    });

    
    $('.inputs input:nth-of-type(2)').click(function(){
        
        okok = 1;
        
    });



    



})