function title() {
    let name = document.createElement("h1")
    name.innerHTML = "Villa Rosa Kempinski"
    name.classList.add("name")
    let description = document.createElement("p")
    description.textContent = "Welcome to our culinary haven, where every dish tells a story of passion and flavor. From farm-fresh ingredients to artisanal creations, our restaurant invites you on a journey of taste and delight. "
    description.classList.add("para")

    let divContainer = document.getElementById("content")
    divContainer.textContent = ""
    divContainer.append(name, description)
}

export { title as home }