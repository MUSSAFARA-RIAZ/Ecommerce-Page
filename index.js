function func1(){
                     
    var a=document.getElementById("big-img3").style.display='none';
    var b=document.getElementById("big-img2").style.display='none';  
    var c=document.getElementById("big-img1").style.display='block';  
    var d=document.getElementById("big-img4").style.display='none';
    var e=document.getElementById("small-img1").style.opacity='0.5';

    

 }

 
 function func2(){
    console.log("Clicked");
    var a=document.getElementById("big-img2").style.display='block';
    var b=document.getElementById("big-img1").style.display='none';   
    var d=document.getElementById("big-img4").style.display='none'; 
    var c=document.getElementById("big-img3").style.display='none';
    var e=document.getElementById("small-img1").style.opacity='1';
    var f=document.getElementById("small-img2").style.opacity='0.5';
    var g=document.getElementById("small-img3").style.opacity='1';
    var h=document.getElementById("small-img4").style.opacity='1';


 }
 function func3(){
    console.log("Clicked");
    var a=document.getElementById("big-img3").style.display='block';
    var b=document.getElementById("big-img2").style.display='none';  
    var c=document.getElementById("big-img1").style.display='none';  
    var d=document.getElementById("big-img4").style.display='none';
   
    var e=document.getElementById("small-img1").style.opacity='1';
    var f=document.getElementById("small-img2").style.opacity='1';
    var g=document.getElementById("small-img3").style.opacity='0.5';
    var h=document.getElementById("small-img4").style.opacity='1';
    

 }
 function func4(){
    console.log("Clicked");
    var a=document.getElementById("big-img3").style.display='none';
    var b=document.getElementById("big-img2").style.display='none';  
    var c=document.getElementById("big-img1").style.display='none';  
    var d=document.getElementById("big-img4").style.display='block';
    var e=document.getElementById("small-img1").style.opacity='1';
    var f=document.getElementById("small-img2").style.opacity='1';
    var g=document.getElementById("small-img3").style.opacity='1';
    var h=document.getElementById("small-img4").style.opacity='0.5';
    

 }
 var score=0;
 function increment(){
    score=score+1;
    document.getElementById("itemno").innerHTML=score;

    
    
 }
 function decrement(){
   
    score=score-1;
    document.getElementById("itemno").innerHTML=score;

 }
 function cart_func(){
    document.getElementById("cart").style.display='block';
    
    document.getElementById("img2").style.zIndex="1";
    
 }
 function cart_func2(){
    document.getElementById("cart").style.display='none';

 }
 function shopping(){
    var y=document.getElementById("itemno").innerText;
    if(y==0){
       document.getElementById("cart").style.display='block';
       document.getElementById("btn3").style.opacity='0.5';
       

    }
    else{
    
    document.getElementById("cart").style.display='block';
    document.getElementById("btncheck").style.display='block';

    document.getElementById("text").innerHTML="Your Total Amount is $125.00 * "+ y + " =" + 125.00 * y;
    document.getElementById("btn3").style.opacity='0.5';


  


    }
    

 }
