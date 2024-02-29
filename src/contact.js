import '@fortawesome/fontawesome-free/css/all.css';

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

    const twitter = document.createElement("a");
    const twitterIcon = document.createElement("i");
    twitterIcon.classList.add("fa", "fa-twitter");
    twitter.appendChild(twitterIcon);
    twitter.classList.add("twit");

    const facebook = document.createElement("a");
    const facebookIcon = document.createElement("i");
    facebookIcon.classList.add("fa", "fa-facebook-square");
    facebook.appendChild(facebookIcon);
    facebook.classList.add("face");

    leftDiv.append(label, tele, box, twitter, facebook);

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
