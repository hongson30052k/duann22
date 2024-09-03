var formElement = document.querySelector("#form");

if (formElement) {
        formElement.addEventListener("submit", function (event) {
            event.preventDefault();
            var username = document.querySelector("#inputUsername");
            var password = document.querySelector("#inputPassword");
            var confirmPassword = document.querySelector("#inputConfirmPassword");
            var emailHelp = document.querySelectorAll("#emailHelp");
            if (username.value === "" || username.value.length < 6) {
                username.classList.add("is-invalid");
                emailHelp[0].innerText = "Username không được để trống và phải có ít nhất 6 kí tự";
                emailHelp[0].style.color = "red";
            } else {
                username.classList.remove("is-invalid");
                emailHelp[0].innerText = "";
            }
            if (password.value === "" || password.value.length < 6) {
                password.classList.add("is-invalid");
                emailHelp[1].innerText = "Password không được để trống và phải có ít nhất 6 kí tự";
                emailHelp[1].style.color = "red";
            } else {
                password.classList.remove("is-invalid");
                emailHelp[1].innerText = "";
            }
            if (confirmPassword.value === "" || (password.value !== confirmPassword.value) || confirmPassword.value.length < 6) {
                confirmPassword.classList.add("is-invalid");
                emailHelp[2].innerText = "Password khác nhau hoặc phải có nhất 6 kí tự";
                emailHelp[2].style.color = "red";
            } else {
                confirmPassword.classList.remove("is-invalid");
                console.log("Đăng ký thanh cên");
                emailHelp[2].innerText = "";
                var data = {
                    username: username.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
                }
                console.log(emailHelp[3]);
                emailHelp[3].innerText = "Đăng ký thành công vui lòng ckick chuyển đến trang Login";
                createCourse(data);
                emailHelp[3].onclick = function () {
                    window.location.href = "login.html";
                }
            }
            
        })
    
}

var getApi = 'https://66d27be6184dce1713cda906.mockapi.io/username'
function start() {
    fetch(getApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
}
function createCourse(data) {
    fetch(getApi, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
}
start()