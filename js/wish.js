function goBack(){ window.history.back(); }

// Load user data
const name = localStorage.getItem('name');
const gender = localStorage.getItem('gender');

// Blessings
const maleBlessings = [
    `Hey ${name}, may your year be filled with joy and adventure. 
    Celebrate with happiness and embrace every new moment that comes your way. 
    May laughter always surround you, and may your dreams guide you to success. 
    Keep shining bright, stay confident, and never lose your amazing spirit. 
    Cheers to a year of health, happiness, and unforgettable memories!`,

    `Wishing you endless success, ${name}. 
    Keep smiling, stay positive, and enjoy every moment of your journey. 
    May this birthday mark the beginning of a year filled with opportunities, 
    laughter, and love from everyone around you. 
    Let every day be brighter than the last and full of exciting adventures!`,

    `Happy Birthday ${name}! May laughter, fun, and surprises follow you every day. 
    Embrace each challenge with courage and make the most out of every opportunity. 
    Let happiness and positivity fill your heart in every season. 
    Surround yourself with people who inspire and support you. 
    This year is yours to shine brighter than ever before!`,

    `Cheers ${name}! May your birthday bring memories you will cherish forever. 
    Let your dreams grow bigger and your achievements even greater. 
    May joy, laughter, and love follow you in everything you do. 
    Keep being the amazing person everyone admires and loves. 
    Wishing you a fantastic year ahead full of blessings and success!`,

    `Happy Birthday ${name}! Today is your day to celebrate life, 
    to embrace happiness, and to enjoy every little moment. 
    May your journey ahead be filled with hope, success, and love. 
    Always believe in yourself and let your heart guide you. 
    Here’s to a year that’s as incredible and unique as you are!`
];


const femaleBlessings = [
    `Happy Birthday ${name}! May your day sparkle as bright as your smile. 
    Let love, joy, and laughter fill every corner of your life. 
    May you always find reasons to be happy and to celebrate yourself. 
    Surround yourself with people who uplift and inspire you. 
    Wishing you a year full of magical moments and endless happiness!`,

    `Wishing you ${name}, love, laughter, and endless happiness today and always. 
    May your dreams shine brighter than the stars and lead you to great adventures. 
    Keep your heart full of hope and your mind open to new possibilities. 
    May every day bring you closer to achieving everything you desire. 
    Celebrate life with joy, and let your spirit glow even brighter!`,

    `Celebrate your special day ${name} with joy, surprises, and magical moments. 
    Let every moment of this year bring you happiness and new experiences. 
    May laughter follow you wherever you go, and love surround you always. 
    Believe in yourself, cherish your unique talents, and share your light. 
    Here’s to a fabulous year filled with blessings and unforgettable memories!`,

    `Cheers to you ${name}! May this year bring all the dreams you desire. 
    Keep smiling, stay confident, and embrace every opportunity life gives. 
    May happiness and positivity guide you through every day. 
    Surround yourself with love, inspiration, and endless laughter. 
    Wishing you an incredible birthday and an amazing journey ahead!`,

    `Happy Birthday ${name}! Today is the start of another wonderful chapter. 
    May it be filled with exciting adventures, beautiful memories, and love. 
    Keep following your dreams and never stop believing in yourself. 
    Let every day remind you how special and amazing you are. 
    Cheers to a fantastic year ahead, full of joy and endless blessings!`
];


const wishText = document.getElementById('wishText');
const blessings = gender==='male'?maleBlessings:femaleBlessings;
wishText.innerText = blessings[Math.floor(Math.random()*blessings.length)];

// Generate golden snowballs
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
