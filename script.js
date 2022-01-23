let score = 0;
let time = 30;
let counter = document.getElementById("count2");
let next = document.querySelector("button");
let qs = document.getElementById("qs2");

//time countdown
 let countdown = ()=>{
   if(time >= 0){
     counter.innerHTML = time;
     time--;
  }
     else
       turngreen();
    
}
 setInterval(countdown,1000);

//listeners for click events
qs.addEventListener('click',()=>{
  score++;
  turngreen();
})

  document.querySelectorAll(".wrong-quiz")[0].addEventListener('click',()=>{
    document.querySelector(".qz1").style.backgroundColor="red";
    turngreen();
    
    
})
    document.querySelectorAll(".wrong-quiz")[1].addEventListener('click',()=>{
      document.getElementById("qz3").style.backgroundColor="red";
      turngreen();
})
     document.querySelectorAll(".wrong-quiz")[2].addEventListener('click',()=>{
       document.getElementById("qz4").style.backgroundColor="red";
       next.style.display = 'block';
       turngreen();
       
})

let turngreen = ()=> {
  qs.style.backgroundColor="green";
  setTimeout(function(){ 
    window.location.href="../QUIZ2/index.html";
}, 2800);
}
