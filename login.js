document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();

   var getApi = 'https://66d27be6184dce1713cda906.mockapi.io/username'
    function start() {
    var username = document.querySelector("#inputUsername");
    var password = document.querySelector("#inputPassword");
    var emailHelp = document.querySelectorAll("#emailHelp");
    fetch(getApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        data = data
        for (var i = 0; i < data.length; i++) {
            if (username.value === data[i].username) {
                username.classList.remove("is-invalid");
                emailHelp[0].innerText = "";
                emailHelp[2].innerText = "";
                if (password.value === data[i].password) {
                    password.classList.remove("is-invalid");
                    emailHelp[1].innerText = "";
                    emailHelp[2].innerText = "Đăng nhập thành công";
                    window.location.href = "./sanpham.html"; 
                } else {
                    password.classList.add("is-invalid");
                    emailHelp[1].innerText = "Password không đúng";
                    emailHelp[1].style.color = "red";
                    emailHelp[2].innerText = "";
                }
            }
            else {
                username.classList.add("is-invalid");
                emailHelp[0].innerText = "Username không có vui lòng nhập lại";
                emailHelp[0].style.color = "red";
                emailHelp[2].innerText = "";
                
            }
        }
    })
}
start()
})

