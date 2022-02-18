const hobbies=document.getElementsByClassName("hobbies")
const color_map=['orange','green','yellow'];


//check if each element exist in view port on scroll

const handleList=()=>{
  //check if its in view port
  for (var i = 0; i < hobbies.length; i++) {
  //  if(checkElementVisible(hobbies[i])){
      //if current element is visible determine which is going to slide left or right
      if(i%2==0){
        //slide to left
        //set to float from left
        //hobbies[i].style.float="left";
      //  hobbies[i].style.clear="left";
        hobbies[i].style.backgroundColor=color_map[i%3];
      }else{
        //slide to right
        //set to float from right
        //hobbies[i].style.float="right";
        //hobbies[i].style.clear="right";
        hobbies[i].style.backgroundColor=color_map[i%3];
      }
//    }
  }
}


window.addEventListener('load',()=>{
    handleList();
})
