function goBack(){ window.history.back(); }

const name = localStorage.getItem('name');
const dobStr = localStorage.getItem('dob');
if(!dobStr){
    alert("Enter your details first!");
    window.location.href = "index.html";
}
const dob = new Date(dobStr);

function updateCountdown(){
    const now = new Date();
    let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if(nextBirthday < now){
        nextBirthday.setFullYear(now.getFullYear()+1);
    }
    const diff = nextBirthday - now;
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
    const seconds = Math.floor((diff % (1000*60))/1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Weekday display
    const options = { weekday: 'long' };
    document.getElementById('weekDay').innerText = `Birthday falls on: ${nextBirthday.toLocaleDateString('en-US', options)}`;

    if(days===0 && hours===0 && minutes===0 && seconds===0){
        window.location.href='wish.html';
    }
}

setInterval(updateCountdown,1000);
updateCountdown();

const snowfallBg = document.getElementById("snowfall-bg");

function createSnowflake(){
    const snow = document.createElement("div");
    snow.classList.add("snowflake");

    const size = Math.random() * 6 + 6; // 6px – 12px
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (6 + Math.random() * 6) + "s";

    snowfallBg.appendChild(snow);

    // remove after fall
    setTimeout(() => {
        snow.remove();
    }, 12000);
}

// Light snowfall (not heavy)
setInterval(createSnowflake, 350);
