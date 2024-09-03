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
            td1.innerText = data[i].id
            td2.innerText = data[i].username
            td3.innerText = data[i].password
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tbody.appendChild(tr)
        }
    })
}

start()