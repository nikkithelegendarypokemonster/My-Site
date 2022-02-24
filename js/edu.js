const edu_container=document.querySelector('.edu_slider')
const  images=document.querySelectorAll('.edu_slides')
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const edu_desc=document.getElementById("edu_desc")
let counter=0;
const dimension=images[0].clientWidth;
edu_desc.innerHTML=images[0].name;

prev.addEventListener("click",()=>{
  if(counter<0) return
  edu_container.style.transition="transform 0.4s ease-in-out"
  counter--;
  edu_container.style.transform='translateX('+(-dimension*counter)+'px)'
  edu_desc.innerHTML=images[counter].name;
})
next.addEventListener("click",()=>{
  if(counter2>images2.length-1) return
  edu_container.style.transition="transform 0.4s ease-in-out"
  counter++;
  edu_container.style.transform='translateX('+(-dimension*counter)+'px)'
  edu_desc.innerHTML=images[counter].name;
})

edu_container.addEventListener("transitionend",()=>{
  if(counter>images.length-1){
    edu_container.style.transition="none"
    counter=0;
    edu_container.style.transform='translateX('+(-dimension*counter)+'px)'
    edu_desc.innerHTML=images[0].name;
  }
  if(counter<0){
    edu_container.style.transition="none"
    counter=images.length-1;
    edu_container.style.transform='translateX('+(-dimension*counter)+'px)'
    edu_desc.innerHTML=images[counter].name;
  }
})
