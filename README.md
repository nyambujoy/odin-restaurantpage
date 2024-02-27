# odin-restaurantpage

function renderHome() {


    const name = document.createElement("h1")
    name.innerHTML = "Villa Rosa Kempinski"
    name.classList.add("name")
    const miniTile = document.createElement("h3")
    miniTile.textContent = "impeccable fine dinning.."
    miniTile.classList.add("miniTitle")
    let divContainer = document.getElementById("content")
    divContainer.append(name, miniTile)


};


function description() {
    
    let divContainer = document.getElementById("content")
    divContainer.append(description)
}

function rezButton() {
    const rezBtn = document.createElement("button")
    rezBtn.textContent = "Make Resarvation"
    rezBtn.classList.add("rezBtn")
    divContainer.append(rezBtn)
}
function loadHomePage() {
    renderHome()
    description()
    rezButton()
}

export default { loadHomePage as home }

<!-- index.js -->
import { loadHomePage } from './home';
console.log(home.js);


about Indulge in a symphony of flavors curated by our talented chefs, offering a fusion of local tradition and global inspiration. Whether it's an intimate dinner or a celebratory feast, immerse yourself in the warmth of our hospitality and the richness of our menu. Join us to savor unforgettable moments and create cherished memories around our table.