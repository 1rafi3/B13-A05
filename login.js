
document.getElementById('login-btn')
    .addEventListener('click', function () {
        //userName er input k dhore value nitesi
        const userName = document.getElementById('user-name');
        // console.log(userName);
        const userNameValue = userName.value;
        // const userNameValue = 'admin';
        // console.log(userNameValue);

        //password ta k dhorsi 
        const inputPassword = document.getElementById('password');
        const password = inputPassword.value;
        // const password = 'admin123';
        // console.log(password);

        //check korbo userName ebong pass ki same ki na 
        if (userNameValue === 'admin' && password === 'admin123') {
            window.location.assign('/main.html');
        } else {
            alert('username or password is invalid');
            return;
        }

    })
