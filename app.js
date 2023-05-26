
// function playDrum(e){
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//   if(!audio)return
//   audio.currentTime = 0;
//   audio.play()
//   key.classList.add('playing')
// }

// function removeTransition(e){
//   if(e.propertyName !== 'transform') return;
//   this.classList.remove('playing')
//   console.log(e.propertyName)
// }

// const keys = document.querySelectorAll('.key').forEach((key)=>{
//   key.addEventListener('transitionend', removeTransition)
// })

// window.addEventListener('keydown', playDrum)





window.addEventListener('keydown',(e)=>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio)return
  audio.play()
  audio.currentTime = 0;
  keys.classList.add('playing')
  setTimeout(()=>{
    keys.classList.remove('playing')
  },100)
})



