const elements=document.getElementsByClassName("scroll")

const checkElementVisible=(el)=>{
  return (el.getBoundingClientRect().top<=(window.innerHeight/2)&& el.getBoundingClientRect().bottom>=(window.innerHeight/4));
}
const handleScroll=()=>{
  for (var i = 0; i < elements.length; i++) {
//    console.log(elements[i].getBoundingClientRect());
    //check if element is visible on scroll height/2
    if(checkElementVisible(elements[i])){
      //element handle is element[i]
      //put scrolled class here
      elements[i].classList.add("scrolled")
    }else {
      //element would not be visible
      elements[i].classList.remove("scrolled")
    }
  }

}
window.addEventListener("scroll",()=>{
  //hande scrolling logic
  handleScroll()
})

//======================================================================
const handleImageStyle=()=>{
  var image=document.querySelector("#introHead .intro-container");
  var actualImage=document.querySelector("#introHead .intro-container #slider .current");
  //console.log(image);
  //console.log(document.documentElement.clientWidth);
  if(screen.width<=425){
    image.style.cssText="display: flex;flex-direction: column;justify-content:center;align-items:center;color: black;margin: 2rem;";
    actualImage.style.cssText="display: flex;flex-direction: column;justify-content:center;border-radius:50%;"
  }
}
