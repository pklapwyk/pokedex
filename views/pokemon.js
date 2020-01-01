window.onload = function () {
    fetch('/pokemon.json')
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            let obj = content
            console.log(obj)
        }

)}