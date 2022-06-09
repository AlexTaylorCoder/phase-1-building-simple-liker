// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.querySelectorAll(".like-glyph")

like.forEach(ele=> {
  ele.addEventListener("pointerdown",(e)=>{
    if (e.target.textContent === EMPTY_HEART) {
      mimicServerCall().then(clickSuccessEmpty).catch(clickFailed)
      e.target.textContent = FULL_HEART
      e.target.classList.add("activated-heart")
    }
    else {
      mimicServerCall().then(clickSuccessFull).catch(clickFailed) 
      e.target.textContent = EMPTY_HEART
      e.target.classList.remove("activated-heart")
    }

  })
})
function clickSuccessEmpty() {

  console.log(like)
}
function clickSuccessFull(){
  e = EMPTY_HEART
}
function clickFailed(data){
  const modal= document.getElementById("modal")
  modal.classList.remove("hidden")
  modal.textContent = data
  setTimeout(()=> modal.classList.add("hidden"),3000)

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
