window.addEventListener("keydown" , function(e){
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`)/* audio attribute using es6 template to return the audio related to the key code*/
    const key = document.querySelector(`.key[data-keys="${e.keyCode}"]`)
   // console.log(key)
    if(!audio) return;/* stop the function if there is no audio elemnt related to the keyCode, altogether*/
    audio.currentTime = 0/* rewind to the start upon successive clicking*/
    audio.play()//play the audio file related to the key code
    
    key.classList.add('playing');

});
function removeTransition(e){
  // console.log(e.propertyName)
   if(e.propertyName !== "transform") return ; //skip it if it is not transformed
   //console.log(this)
   // this : is the element caled against it. AddeventListener is called aganst key.

   this.classList.remove('playing')
}
const keys= document.querySelectorAll(".key")




// In an array we can not listen to all of them, we need to loop overeach element to give them an event listener
  keys.forEach(key => key.addEventListener("transitionend", removeTransition)
      
  );