let siteVisitors = ["Hejpa", "Dejpa"]

window.onload = () => {
    let pTag = document.getElementById("pTag")
    const body = document.getElementById("main")
    document.getElementById("input").addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            e.preventDefault()
            handleClick()
        }
    });

    let listFromLS = JSON.parse(localStorage.getItem("previousVisitors"))
    if (listFromLS) {
        siteVisitors = []
        listFromLS.forEach(name => {
            siteVisitors.push(name)
        });
    } else {
        localStorage.setItem("previousVisitors", JSON.stringify(siteVisitors))
    }

    body.appendChild(pTag)
}

function handleClick() {
    let inputName = input.value.charAt(0).toUpperCase() + input.value.slice(1)
    let nameIsInLS = false

    siteVisitors.map(name => {
        if (name === inputName) {
            nameIsInLS = true
            return pTag.innerHTML = "Välkommen tillbaka " + name + "!"
        }
    })

    if (!nameIsInLS) {
        siteVisitors.push(inputName)
        localStorage.setItem("previousVisitors", JSON.stringify(siteVisitors))
        pTag.innerHTML = "Välkommen " + inputName + "!"
    }

    input.value = ""
    const form = document.getElementById("form")
    form.style = "display: none;"
    setTimeout(() => pTag.style = "display: none;", 3000)
}