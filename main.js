window.onload = () => {
    let siteVisitors = ["Hejpa", "Dejpa", "lejpa"]

    let pTag = document.createElement("p")
    const body = document.getElementById("main")
    const input = document.getElementById("input")

    let listFromLS = localStorage.getItem("previousVisitors")

    if(listFromLS){
        siteVisitors = []
        siteVisitors.push(listFromLS)
    } else {
        localStorage.setItem("previousVisitors", siteVisitors)
    }

    console.log(pTag)
    pTag.innerHTML = siteVisitors
    body.appendChild(pTag)
}

function handleChange (){
    console.log(input.value)
}