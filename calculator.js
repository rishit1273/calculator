let disp = document.querySelector("#display");
let buts =document.querySelectorAll(".buttons")
let bt1 = document.getElementById("b1");
let bt2 = document.getElementById("b2");
let bt3 = document.getElementById("b3");
let btadd = document.getElementById("add"); 
let bt4 = document.getElementById("b4");
let bt5 = document.getElementById("b5");
let bt6 = document.getElementById("b6");
let btsub = document.getElementById("subtract"); 
let bt7 = document.getElementById("b7");
let bt8 = document.getElementById("b8");
let bt9 = document.getElementById("b9"); 
let btmul = document.getElementById("multiply"); 
let btzero = document.getElementById("bzero"); 
let btequals = document.getElementById("equals"); 
let btrst = document.getElementById("clear"); 
let btdiv = document.getElementById("divide"); 

function display(value) {
    disp.value += value;
}

btzero.addEventListener('click', () => display("0"));
bt1.addEventListener('click', () => display("1"));
bt2.addEventListener('click', () => display("2"));
bt3.addEventListener('click', () => display("3"));
bt4.addEventListener('click', () => display("4"));
bt5.addEventListener('click', () => display("5"));
bt6.addEventListener('click', () => display("6"));
bt7.addEventListener('click', () => display("7"));
bt8.addEventListener('click', () => display("8"));
bt9.addEventListener('click', () => display("9"));
btmul.addEventListener('click', () => display("*"));
btadd.addEventListener('click', () => display("+"));
btsub.addEventListener('click', () => display("-"));
btdiv.addEventListener('click', () => display("/"));

function reset() {
    disp.value = "";
}

btrst.addEventListener("click", reset);
btequals.addEventListener("click" ,( )=> 
     {
          let b=disp.value
          reset();
          console.log(b);
          display(eval(b) 

     )});


     function voice()
     {
        var audio = new Audio('asset/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3');
        audio.play();
     }

     buts.forEach(button => {
        button.addEventListener("click", voice);
    });
