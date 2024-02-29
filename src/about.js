import rest from './imgs/rest.jpg'

function aboutUs() {
    const newElement = document.createElement('img');
    newElement.src = rest
    document.body.appendChild(newElement);
    newElement.classList.add("newImage")

    let aboutH1 = document.createElement("h1")
    aboutH1.innerHTML = "About us"
    aboutH1.classList.add("aboutH")

    const paragraph = document.createElement("p")
    paragraph.textContent = "Welcome to \"Flavors of the World,\" where culinary diversity knows no bounds. Established in the vibrant heart of the city in 1998, our restaurant has been a beacon of gastronomic exploration for over two decades. From humble beginnings, we embarked on a journey to redefine the culinary landscape, offering a tantalizing array of dishes from every corner of the globe Driven by a passion for discovery and a commitment to excellence, our restaurant was founded on the belief that food transcends boundaries, connecting people through shared experiences and flavors. Whether you crave the spicy warmth of Mexican cuisine, the delicate intricacies of Japanese sushi, or the hearty comfort of Italian pasta, our menu celebrates the rich tapestry of world cuisines, inviting you on a culinary adventure like no other At \"Flavors of the World,\" every dish tells a story, crafted with care and expertise by our talented chefs who draw inspiration from traditions far and wide. From family gatherings to romantic evenings and festive celebrations, our restaurant has been a cherished destination for food enthusiasts, offering a welcoming ambiance and flavors that linger in memory long after the meal has ended Join us as we continue to celebrate diversity, creativity, and the joy of discovery, one delectable bite at a time. Experience the world on your plate at \"Flavors of the World\"  where every meal is an invitation to explore, savor, and delight in the wonders of global cuisine."
    paragraph.classList.add("about-para")

    let divContainer = document.getElementById("content")
    divContainer.textContent = ""
    divContainer.append(aboutH1, paragraph)


}

export { aboutUs }