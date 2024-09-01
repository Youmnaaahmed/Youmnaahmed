// JavaScript to handle form interactions
document.querySelectorAll('.dot').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Button ' + this.innerText + ' clicked!');
    });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    
    alert(`Name: ${name}\nPassword: ${password}\nPhone: ${phone}`);
});
