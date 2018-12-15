const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    
    const secondsDeg = (now.getSeconds() / 60 * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    
    const minsDeg = (now.getMinutes() / 60 * 360) + 90;
    minHand.style.transform = `rotate(${minsDeg}deg)`;
    
    const hoursDeg = (now.getHours() / 12 * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(setDate, 1000);
setDate();