const chatOutput = document.getElementById("chat-output");
const chatForm = document.getElementById("chat-form");
const inputText = document.getElementById("input-text");

const randomResponses = [
    "Great question! But what about a pizza? For example, I can propose a pizza Margherita: tomato sauce, mozzarella cheese, and basil. The simplest of pizzas, yet always the best one! How about it?",
    "Interesting question! However, have you considered a pizza? What about a Pepperoni pizza? Topped with tomato sauce, mozzarella cheese, and pepperoni slices. A classic choice that never disappoints! What do you think?",
    "Nice query! But let's talk pizza. How about a pizza Quattro Formaggi? With tomato sauce, mozzarella, gorgonzola, fontina, and parmigiano-reggiano cheeses. A delight for cheese lovers! Sound good?",
    "Good question! On a different note, have you thought about pizza? Consider the pizza Veggie Supreme: tomato sauce, mozzarella, onions, bell peppers, mushrooms, and olives. A fantastic choice for veggie lovers! Tempting?",
  "Fascinating query! But let's shift gears to pizza. How about a pizza Capricciosa? Topped with tomato sauce, mozzarella, mushrooms, artichokes, olives, and ham. A delightful mix of flavors! What's your take?",
    "Intriguing question! However, I'd like to suggest a pizza. Consider the pizza BBQ Chicken: barbecue sauce, mozzarella, grilled chicken, red onions, and cilantro. A smoky and delicious option! Would you like that?",
    "Superb question! On another note, let's discuss pizza. What about a pizza Hawaiian? With tomato sauce, mozzarella, ham, and pineapple. A sweet and savory combination that everyone loves, except the Italians! How does that sound?",
    "Impressive question! But I have a pizza on my mind. How about a pizza Diavola? Topped with tomato sauce, mozzarella, spicy salami, and red pepper flakes. Perfect for those who enjoy a little heat! Are you up for it?",
   "Amazing question! But let's talk about pizza. What do you think about a pizza Calzone? Stuffed with tomato sauce, mozzarella, ricotta, and ham. A delicious folded pizza with a twist! Does it sound good?",
    "Captivating query! However, I propose we discuss pizza. How about a pizza Rustica? Topped with tomato sauce, mozzarella, sausage, peppers, and onions. A hearty and satisfying choice! Are you interested?",
    "Astounding question! On the topic of pizza, consider the pizza Pesto: a pesto sauce base, mozzarella, sun-dried tomatoes, and pine nuts. A mouthwatering blend of flavors! Would you like to try it?",
    "Awesome question! But let's switch to pizza. What about a pizza Tropicale? With tomato sauce, mozzarella, bacon, and pineapple. A delightful twist on the classic Hawaiian that will make any Italian's stomach turn! Tempting?",
    "Thought-provoking question! However, pizza is always a good idea. Consider the pizza Gorgonzola e Pere: a blend of gorgonzola and mozzarella cheeses, caramelized pears, and walnuts. A unique and tasty choice! How about it?",
    "Interesting point! How about a Quattro Stagioni pizza? It has tomato sauce, mozzarella, ham, olives, mushrooms, and artichokes. A perfect blend of flavors for every season!",
    "Well thought! What about a Sicilian pizza? A thick crust with tomato sauce, mozzarella, onions, anchovies, and olives. An amazing choice for a hearty meal!",
    "Great inquiry! What about a White pizza? It comes with a creamy garlic sauce, mozzarella, ricotta, and spinach. A delicious alternative to tomato-based pizzas!",
    "That's a fun question! How about a Philly Cheesesteak pizza? It comes with mozzarella, thinly sliced beef, onions, and bell peppers. A satisfying blend of flavors!",
    "Thought-provoking! What about a Spinach and Artichoke pizza? It features a creamy garlic sauce, mozzarella, spinach, and artichokes. A fantastic choice for veggie lovers!",
    "Superb question! How about a Margherita with Buffalo Mozzarella? Tomato sauce, buffalo mozzarella, and basil make this a luxurious upgrade to the classic Margherita pizza!",
    "Nice one! Have you thought about a Prosciutto e Funghi pizza? It has tomato sauce, mozzarella, ham, and mushrooms. An irresistible combination of ingredients!",
    "Good query! What about a Greek pizza? It features tomato sauce, mozzarella, feta, olives, onions, and bell peppers. A delicious Mediterranean twist on pizza!",
    "I love your curiosity! What about a Shrimp and Garlic pizza? It has a creamy garlic sauce, mozzarella, shrimp, and green onions. A seafood lover's delight!",
    "Interesting thought! How about a Truffle pizza? It features a white sauce, mozzarella, mushrooms, and truffle oil. A luxurious and indulgent pizza option!",
    "You've piqued my interest! What about a Mediterranean pizza? It has tomato sauce, mozzarella, sun-dried tomatoes, olives, and feta. A flavor-packed choice for pizza lovers!"
];

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = inputText.value;

    if (userText.trim()) {
        addMessage("You: " + userText, "user");
        const randomResponse = getRandomResponse();
        setTimeout(() => {
            typeResponse("ChatGPItalian: ", randomResponse, 0);
        }, 1000);
    }

    inputText.value = "";
});


function addMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(type);

    const avatar = document.createElement("span");
    avatar.classList.add("avatar");
    avatar.textContent = type === "user" ? "👨🏻" : "🍕"; // Use different emoji for user and bot

    const text = document.createElement("span");
    text.textContent = message;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(text);

    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * randomResponses.length);
    return randomResponses[randomIndex];
}

function typeResponse(prefix, response, wordIndex) {
    if (wordIndex < response.split(" ").length) {
        const responseSoFar = response.split(" ").slice(0, wordIndex + 1).join(" ");
        const lastMessage = chatOutput.querySelector(".bot:last-child");

        if (lastMessage) {
            chatOutput.removeChild(lastMessage);
        }

        addMessage(prefix + responseSoFar, "bot");
        setTimeout(() => {
            typeResponse(prefix, response, wordIndex + 1);
        }, 300); // Adjust typing speed by changing the delay (in ms)
    }
}
