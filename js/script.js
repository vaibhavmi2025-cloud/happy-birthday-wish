document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dobStr = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    if(name && dobStr && gender){
        // Store in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('dob', dobStr);
        localStorage.setItem('gender', gender);

        const dob = new Date(dobStr);
        const today = new Date();

        if(dob.getDate() === today.getDate() && dob.getMonth() === today.getMonth()){
            // Birthday today → Wish Page
            window.location.href = 'wish.html';
        }else{
            // Else → Countdown Page
            window.location.href = 'countdown.html';
        }
    }
});
