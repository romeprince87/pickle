let slides=document.getElementsByClassName('slide-container');

let slidebar=document.getElementById('click');
let cont=document.getElementsByClassName('container12');

let v=0;

slidebar.addEventListener('click',function(){
    
    if(v==0){
        for(let z of slides){
            z.style.display = 'none';
            v=1;
            break;
           }
        for(let i of cont){
            i.style.display = 'none';
            v=1;
            break;
        }
    }else{
        for(let z of slides){

            z.style.display = 'block';
            z.style.cssText='background-color:white; ';
    
            v=0;
            break;
           }
        for(let y of cont){

            y.style.display = 'block';
        
    
            v=0;
            break;
        }
    }
   
     
})


    



