window.onload = function () {
    fetch("/pokemon")
    .then(function (response) {
        return response.json();
    })
        .then(function (content) {
            console.log(content)
        })
}