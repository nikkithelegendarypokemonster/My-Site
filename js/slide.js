const slide = document.getElementsByClassName("slide")
const slider = document.getElementById("slider")
//create a function that runs when view port is in #introHead

var index = 0;
var slideInterval = null;
function slideItems(index) {
  //current is only visible
  handleImageStyle();
  if (index >= slide.length - 1) {
    this.index = 0;
  }
  if (index == 0) {
    if (slide[slide.length - 1].classList.contains("current")) slide[slide.length - 1].classList.remove("current");
  } else {
    if (slide[index - 1].classList.contains("current")) slide[index - 1].classList.remove("current");
  }
  slide[index].classList.add("current")
}
const handleSlide = () => {
  //check if viewport is in bounds of the slide
  //if (checkElementVisible(slider)) {
    //if true start slide process
    handleImageStyle();
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    slideInterval = setInterval(function() {
      slideItems(index++)
    }, 4000)
  // } else {
  //   //reset the slide current to starting element
  //   clearInterval(slideInterval);
  //   slideInterval = null;
  //   //back to starting index
  //   index = 0;
  // }
}
window.addEventListener('load', () => {
  handleSlide();
})
