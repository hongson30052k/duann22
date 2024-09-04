function start () {
    var getApi = 'https://66d27be6184dce1713cda906.mockapi.io/username'
    fetch(getApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        var tbody = document.querySelector("tbody")
        // console.log(tbody)
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var td2 = document.createElement("td")
            var td3 = document.createElement("td")
            var td4 = document.createElement("td")
            var td5 = document.createElement("td")
            td1.innerText = data[i].id
            td2.innerText = data[i].username
            td3.innerText = data[i].password
            td4.innerHTML = `<button class="btn btn-warning" onclick="editProduct(${data[i].id})">Edit</button>`
            td5.innerHTML = `<button class="btn btn-danger" onclick="deleteProduct(${data[i].id})">Delete</button>`
            console.log(data[i].id)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tbody.appendChild(tr)
        }
    })
}
function editProduct(id) {
    var getApi = `https://66d27be6184dce1713cda906.mockapi.io/username/${id}`
    fetch(getApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
            console.log(data)
            document.querySelector('.modal').style.display = 'block'
            document.querySelector('.closeChanges').onclick = function () {
                document.querySelector('.modal').style.display = 'none'
            }
            document.querySelector('.close').onclick = function () {
                document.querySelector('.modal').style.display = 'none'
            }

            document.querySelector('#inputUsername').value = data.username
            document.querySelector('#inputPassword').value = data.password

            document.querySelector('.saveChanges').onclick = function () {
                var username = document.querySelector('#inputUsername').value
                var password = document.querySelector('#inputPassword').value
                var data = {
                    username : username,
                    password : password
                }
                fetch(getApi, {
                    method : 'PUT',
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
                document.querySelector('.modal').style.display = 'none'
                window.location.reload()
            }
    })
}

function deleteProduct(id) {
    var getApi = `https://66d27be6184dce1713cda906.mockapi.io/username/${id}`
    fetch(getApi, {
        method : 'DELETE'
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        window.location.reload()
    })
}
start()