const edu_container2=document.querySelector('.edu_slider2')
const  images2=document.querySelectorAll('.edu_slides2')
const prev2=document.getElementById('prev2');
const next2=document.getElementById('next2');
const edu_desc2=document.getElementById("edu_desc2")



let counter2=1;
const dimension2=images2[0].clientWidth;
edu_container2.style.transform='translateX('+(-dimension2*counter2)+'px)'
edu_desc2.innerHTML=images2[1].name;
prev2.addEventListener("click",()=>{
  if(counter2<=0) return
  edu_container2.style.transition="transform 0.4s ease-in-out"
  counter2--;
  edu_container2.style.transform='translateX('+(-dimension2*counter2)+'px)'
  edu_desc2.innerHTML=images2[counter2].name;
})
next2.addEventListener("click",()=>{
  if(counter2>=images2.length-1) return
  edu_container2.style.transition="transform 0.4s ease-in-out"
  counter2++;
  edu_container2.style.transform='translateX('+(-dimension2*counter2)+'px)'
  edu_desc2.innerHTML=images2[counter2].name;
})

edu_container2.addEventListener("transitionend",()=>{
  if(images2[counter2].id==="lastClone2"){
    edu_container2.style.transition="none"
    counter2=images2.length - 2;
    edu_container2.style.transform='translateX('+(-dimension2*counter2)+'px)'
    edu_desc2.innerHTML=images2[0].name;
  }
  if(images2[counter2].id==="firstClone2"){
    edu_container2.style.transition="none"
    counter2=images2.length-counter2;
    edu_container2.style.transform='translateX('+(-dimension2*counter2)+'px)'
    edu_desc2.innerHTML=images2[counter2].name;
  }
})
