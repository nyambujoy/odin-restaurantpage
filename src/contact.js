
import twitterIcon from './imgs/twitter.svg'
import facebook from './imgs/facebook.svg'

function contactUs() {
    const leftDiv = document.createElement("div")
    leftDiv.classList.add("leftDiv");

    const label = document.createElement("h2")
    label.innerHTML = "Email us:kekibar&restaurant@gmail.com"
    label.classList.add("label")

    const tele = document.createElement("h2")
    tele.innerHTML = "TEL: +345879647"
    tele.classList.add("tele")

    const box = document.createElement("h2")
    box.innerHTML = "P.O BOX 23458 <br>  Feel free to contact us "
    box.classList.add("box")

    const imgTwitt = document.createElement('img');
    imgTwitt.src = twitterIcon;
    document.body.appendChild(imgTwitt);

    const imgfacebook = document.createElement('img');
    imgfacebook.src = facebook;
    document.body.appendChild(imgfacebook);



    leftDiv.append(label, tele, box, imgTwitt);

    const rightDiv = document.createElement("div")
    rightDiv.classList.add("rightDiv")
    rightDiv.setAttribute("contenteditable", "true");
    // You can set other attributes as needed
    rightDiv.textContent = "Type something here...";

    let divContainer = document.getElementById("content")
    divContainer.textContent = ""
    divContainer.append(leftDiv, rightDiv)


}

export { contactUs }
