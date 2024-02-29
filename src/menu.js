function ourMenu() {
    const divOfMenuOne = document.createElement("div")
    divOfMenuOne.classList.add("divOfMenuOne")
    const foodName = document.createElement("h2");
    foodName.innerHTML = "Sushi"

    const cuisineJapanese = document.createElement("h3");
    cuisineJapanese.innerHTML = "Japanese"

    const description = document.createElement("p")
    description.innerHTML = "Delicious bite-sized rolls of rice and fresh seafood."

    const price = document.createElement("h3")
    price.innerHTML = "price: $12.99"

    divOfMenuOne.append(foodName, cuisineJapanese, description, price)

    const divOfMenuTwo = document.createElement("div")
    divOfMenuTwo.classList.add("divOfMenuOne")
    const foodNameThai = document.createElement("h2");
    foodNameThai.innerHTML = "phad Thai"

    const cuisineThai = document.createElement("h3");
    cuisineThai.innerHTML = "Thai"

    const descriptionThai = document.createElement("p")
    descriptionThai.innerHTML = "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts."

    const priceThai = document.createElement("h3")
    priceThai.innerHTML = "price: $9.99"

    divOfMenuTwo.append(foodNameThai, cuisineThai, descriptionThai, priceThai)

    const divOfMenuThree = document.createElement("div")
    divOfMenuThree.classList.add("divOfMenuOne")
    const foodNameTika = document.createElement("h2");
    foodNameTika.innerHTML = "Chicken Tikka Masala"

    const cuisineTika = document.createElement("h3");
    cuisineTika.innerHTML = "Indian"

    const descriptionTika = document.createElement("p")
    descriptionTika.innerHTML = "Grilled chicken in a creamy tomato sauce with aromatic spices."

    const priceTika = document.createElement("h3")
    priceTika.innerHTML = "price: $ 11.99"

    divOfMenuThree.append(foodNameTika, cuisineTika, descriptionTika, priceTika)

    const divOfMenuFour = document.createElement("div");
    divOfMenuFour.classList.add("divOfMenuOne")
    const foodNameCarbonara = document.createElement("h2");
    foodNameCarbonara.innerHTML = "Spaghetti Carbonara";

    const cuisineCarbonara = document.createElement("h3");
    cuisineCarbonara.innerHTML = "Italian";

    const descriptionCarbonara = document.createElement("p");
    descriptionCarbonara.innerHTML = "Spaghetti pasta tossed in a creamy sauce with crispy bacon, Parmesan cheese, and black pepper.";

    const priceCarbonara = document.createElement("h3");
    priceCarbonara.innerHTML = "price: $10.99";

    divOfMenuFour.append(foodNameCarbonara, cuisineCarbonara, descriptionCarbonara, priceCarbonara);


    const divOfMenuFive = document.createElement("div");
    divOfMenuFive.classList.add("divOfMenuOne")
    const foodNameTacos = document.createElement("h2");
    foodNameTacos.innerHTML = "Beef Tacos al Pastor";

    const cuisineTacos = document.createElement("h3");
    cuisineTacos.innerHTML = "Mexican";

    const descriptionTacos = document.createElement("p");
    descriptionTacos.innerHTML = "Marinated and grilled beef slices with pineapple, onions, cilantro, and salsa, served on warm corn tortillas.";

    const priceTacos = document.createElement("h3");
    priceTacos.innerHTML = "price: $9.99";

    divOfMenuFive.append(foodNameTacos, cuisineTacos, descriptionTacos, priceTacos);

    const divOfMenuSix = document.createElement("div");
    divOfMenuSix.classList.add("divOfMenuOne")
    const foodNameCrepes = document.createElement("h2");
    foodNameCrepes.innerHTML = "Nutella Banana Crepes";

    const cuisineCrepes = document.createElement("h3");
    cuisineCrepes.innerHTML = "French";

    const descriptionCrepes = document.createElement("p");
    descriptionCrepes.innerHTML = "Thin French pancakes filled with Nutella chocolate spread and fresh banana slices.";

    const priceCrepes = document.createElement("h3");
    priceCrepes.innerHTML = "price: $8.99";

    divOfMenuSix.append(foodNameCrepes, cuisineCrepes, descriptionCrepes, priceCrepes);

    const bigContainer = document.createElement("div");
    bigContainer.classList.add("bigContainer")
    bigContainer.append(divOfMenuOne, divOfMenuTwo, divOfMenuThree, divOfMenuFour, divOfMenuFive, divOfMenuSix)


    let divContainer = document.getElementById("content")
    divContainer.textContent = ""
    divContainer.append(bigContainer)
}




export { ourMenu as menu }