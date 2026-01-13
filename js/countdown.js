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

// Generate golden balls
const container = document.querySelector('.ball-container');
for(let i=0;i<30;i++){
    const ball=document.createElement('div');
    ball.classList.add('ball');
    const size=10+Math.random()*20;
    ball.style.width=size+'px';
    ball.style.height=size+'px';
    ball.style.left=Math.random()*100+'vw';
    ball.style.animationDuration=(3+Math.random()*5)+'s';
    ball.style.animationDelay=Math.random()*5+'s';
    ball.style.transform=`rotate(${Math.random()*360}deg)`;
    container.appendChild(ball);
}
