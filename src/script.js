const jsonData = [
    {
        "image": "./assets/partiful.png",
        "eventName": "Partiful Events Page Redesign",
        "description": "Redesigned the Partiful Events Home Page.",
        "categories": ["Prototyping", "UIUX Design", "Figma", "Iterative Design"]
    },
    {
        "image": "./assets/foam_mu.png",
        "eventName": "Foam Web App",
        "description": "Designed the Pinterest for local artists discovery.",
        "categories": ["React", "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma"]
    },
    {
        "image": "./assets/sf_mu.png",
        "eventName": "FunCheapSF Redesign",
        "description": "Redesigning funcheapsf.com.",
        "categories": [ "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma", "Responsive Design"]
    },
    {
        "image": "./assets/panda.png",
        "eventName": "Panda",
        "description": "Kahoot-style multiplayer game.",
        "categories": [ "React", "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma"]
    },
];

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = data.image;
    img.classList.add("rounded-image");
    img.alt = data.eventName;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const eventName = document.createElement("p");
    eventName.classList.add("event-name");
    eventName.textContent = data.eventName;

    const descriptionTextbox = document.createElement("div");
    descriptionTextbox.classList.add("description-textbox");

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = data.description;

    const categories = document.createElement("div");
    categories.classList.add("categories");

    data.categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryText = document.createElement("span");
        categoryText.classList.add("category-text");
        categoryText.textContent = category;

        categoryDiv.appendChild(categoryText);
        categories.appendChild(categoryDiv);
    });

    descriptionTextbox.appendChild(description);
    cardContent.appendChild(eventName);
    cardContent.appendChild(descriptionTextbox);
    cardContent.appendChild(categories);

    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
}

// Function to render cards from JSON data
function renderCards(jsonData) {
    const container = document.getElementById("cards");

    jsonData.forEach(data => {
        const card = createCard(data);
        container.appendChild(card);
    });
}

// Call renderCards with your JSON data
renderCards(jsonData);


function insertFloatingTexts(numInstances) {
    var container = document.getElementById("container");

    for (var i = 0; i < numInstances; i++) {
        // Create the outer div with class "floating-texts"
        var outerDiv = document.createElement("div");
        outerDiv.className = "floating-texts";

        var categories = ["Javascript", "Blender", "Unity", "UIUX Design", "ARVR"];
        categories.forEach(function(category) {
            var categoryDiv = document.createElement("div");
            categoryDiv.className = "category";
            var categorySpan = document.createElement("span");
            categorySpan.className = "category-text";
            categorySpan.textContent = category;
            categoryDiv.appendChild(categorySpan);
            outerDiv.appendChild(categoryDiv);
        });

        container.appendChild(outerDiv);
    }
}

insertFloatingTexts(1); 