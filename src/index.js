// alert("hello world");

// tab switching logic needs to be here 
// we will import all the other tabs here for sure
import { home } from './home'
import { aboutUs } from './about';
import { contactUs } from './contact'
import "./nav.css"
import "./about.css"
import "./contact.css"
import bg from './imgs/bg.png';





// home.title()
// console.log(home)


function createButtons() {

    const imageElement = document.createElement('img');
    imageElement.src = bg; // Use the imported image as the source for the image element
    document.body.appendChild(imageElement);
    imageElement.classList.add("logoImage")

    logo.appendChild(imageElement);
    const homeBtn = document.createElement("button")
    homeBtn.innerHTML = "HOME"
    homeBtn.classList.add("navBtn")
    homeBtn.id = "homeBtn"

    const aboutBtn = document.createElement("button")
    aboutBtn.innerHTML = "ABOUT"
    aboutBtn.classList.add("navBtn")
    aboutBtn.id = "aboutBtn"

    const menuBtn = document.createElement("button")
    menuBtn.innerHTML = "Menu"
    menuBtn.classList.add("navBtn")

    const contactBtn = document.createElement("button")
    contactBtn.innerHTML = "CONTACT"
    contactBtn.classList.add("navBtn")
    contactBtn.id = "contactBtn"

    let navbar = document.querySelector(".navbar")
    navbar.append(homeBtn, aboutBtn, menuBtn, contactBtn)
}
createButtons()
// console.log()

home()
let homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {

    home()

})
let aboutBtn = document.querySelector("#aboutBtn")
aboutBtn.addEventListener("click", () => {

    aboutUs()
})

let contactBtn = document.querySelector("#contactBtn")
contactBtn.addEventListener("click", () => {
    console.log("hello")
    contactUs()
})