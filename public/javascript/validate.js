function validateStudentLogin() {
    console.log('done');

    var idNumber = document.getElementById("idNumber");
    var password = document.getElementById("password");
    var errMsg = document.getElementById('errMsg');
    var err = 0;

    if (idNumber.value == '' || isNaN(idNumber.value)) {
        err++;
    }

    if (password.value == '') {
        err++;
    }

    if (err == 0) {
        return true;
    } else {
        idNumber.classList.add('err');
        password.classList.add('err');

        return false;
    }

}

function validateModLogin() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var errMsg = document.getElementById('errMsg');
    var bg = 'var(--err)';
    var err = 0;

    // Validating user details should be done in server-side

    if (username.value == '') {
        err++;
    }

    if (password.value == '') {
        err++;
    }

    if (err == 0) {
        window.location.href = './mod/home';
    } else {
        username.style.borderColor = bg;
        password.style.borderColor = bg;
        errMsg.style.color = bg;
        errMsg.innerHTML = "Invalid Username/Password.";
    }
}
