window.addEventListener("keydown", function(event){
    var audio = document.querySelector('audio[data-key="'+event.keyCode+'"]');
    var key = document.querySelector('.key[data-key="'+event.keyCode+'"]')
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();    
    key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}