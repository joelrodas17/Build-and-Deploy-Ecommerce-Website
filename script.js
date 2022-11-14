const close =document.getElementById("close");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}
if(close){
  close.addEventListener('click', function(){
    nav.classList.remove('active')
  })
}