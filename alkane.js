const table = document.querySelectorAll('.content2img');
const whole = document.querySelectorAll('.content2p');
for(let i=0; i<2; i++){
    whole[i].addEventListener("mouseover",function(){
        table[i].classList.add("focus")
    })
}