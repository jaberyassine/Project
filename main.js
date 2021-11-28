let tab=["imag1.png","imag2.png","imag3.png"];
let x=0;

function next(){
    if(x>=tab.length-1){
    (x=0)}
    else{
    (x+=1)}
   document.getElementById("ph").setAttribute("src",tab[x]);
   console.log(x)
   console.log(tab[x])


}
function pre(){
    if(x<1){
        (x=2)
    }
    else(
      x-=1  
    )
    document.getElementById("ph").setAttribute("src",tab[x]);

}
let c=0;
function play(){
    
    if(c==0){
        t=setInterval(next,500)
        c=1
    }
    else{clearInterval(t)
     c=0}
        
    
    


}