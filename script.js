const jsonData = [
    {
        "href": "partiful.html",
        "image": "./src/assets/partiful.png",
        "eventName": "Partiful Events Page Redesign",
        "description": "Redesigned the Partiful Events Home Page.",
        "categories": ["Prototyping", "UIUX Design", "Figma", "Iterative Design"]
    },
    {
        "href": "foam.html",
        "image": "./src/assets/foam_mu.png",
        "eventName": "Foam Web App",
        "description": "Designed the Pinterest for local artists discovery.",
        "categories": ["React", "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma"]
    },
    {
        "href": "sf.html",
        "image": "./src/assets/sf_mu.png",
        "eventName": "FunCheapSF Redesign",
        "description": "Redesigning funcheapsf.com.",
        "categories": [ "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma", "Responsive Design"]
    },
    // {
    //     "href": "panda.html",
    //     "image": "./src/assets/panda.png",
    //     "eventName": "Panda",
    //     "description": "Kahoot-style multiplayer game.",
    //     "categories": [ "React", "HTML", "Javascript", "CSS", "Prototyping", "UIUX Design", "Figma"]
    // },
];

function createCard(data) {

    const link = document.createElement("a");
    link.classList.add("link");
    link.href = data.href; 

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

    link.appendChild(card);

    return link;
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


function insertFloatingTexts(categories) {
    var floating = document.getElementById("floating-texts");

    for (var i = 0; i < categories.length; i++) {

        categories.forEach(function(category) {
            var categoryDiv = document.createElement("div");
            categoryDiv.className = "float";
            var categorySpan = document.createElement("span");
            categorySpan.className = "float-text";
            categorySpan.textContent = category;
            categoryDiv.appendChild(categorySpan);
            floating.appendChild(categoryDiv);
        });

    }
}

var categories = ["Javascript","React", "Blender", "Unity", "UIUX Design", "ARVR", "C++", "Python", "Houdini", "Figma", "Maya"];

insertFloatingTexts(categories); 

function scrollButtons() {
    var floatingTexts = document.getElementById('floating-texts');
    var firstButton = floatingTexts.firstElementChild;
    var buttonHeight = firstButton.offsetHeight ;

    // Move the first button to the bottom
    floatingTexts.appendChild(firstButton);

    // Reset the transform of all buttons
    var buttons = document.querySelectorAll('.float');
    buttons.forEach(function(button) {
        button.style.transform = 'translateY(-' + buttonHeight - buttonHeight + 'px)';
    });

    // Calculate the duration for smooth transition
    var duration = 1000; // 1 second
    var startTime = null;

    function moveButtons(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;

        // Move each button up by the height of one button
        buttons.forEach(function(button) {
            var translateY = Math.max(-buttonHeight, -(progress / duration * buttonHeight));
            button.style.transform = 'translateY(' + translateY + 'px)';
        });

        // Continue the animation until all buttons have been scrolled
        if (progress < duration) {
            requestAnimationFrame(moveButtons);
        }
    }

    // Start the animation
    requestAnimationFrame(moveButtons);
}

// Run the scrolling effect every second
setInterval(scrollButtons, 1000);

// function moveText(event) {
//     const text = event.target;
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
//     const textX = text.offsetLeft + text.offsetWidth / 2;
//     const textY = text.offsetTop + text.offsetHeight / 2;
//     const sensitivity = 0.4; 
//     const deltaX = (mouseX - textX) * sensitivity;
//     const deltaY = (mouseY - textY) * sensitivity;

//     text.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

//     setTimeout(() => {
//         text.style.transform = '';
//     }, 300);
// }

document.getElementById('email-icon').addEventListener('click', function() {
    window.location.href = 'iverychen@gmail.com';
});

function scrollToDiv(divId) {
    var targetDiv = document.getElementById(divId);
    var startPosition = window.pageYOffset; // Current scroll position
    var targetPosition = targetDiv.offsetTop; // Position of the target div

    var distance = targetPosition - startPosition;
    var duration = 1000; // 1 second (1000 milliseconds)

    // Get the current timestamp
    var startTime = null || performance.now();

    // Define the animation function
    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        // Calculate the elapsed time
        var elapsedTime = currentTime - startTime;

        // Calculate the new position based on elapsed time and easing function (e.g., quadratic easing)
        var newPosition = easeInOutQuad(elapsedTime, startPosition, distance, duration);

        // Scroll to the new position
        window.scrollTo(0, newPosition);

        // Continue the animation if not finished
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    // Start the animation
    requestAnimationFrame(scrollAnimation);

    // Easing function (quadratic easing)
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function toggleMenu() {
    var menu = document.getElementById("dropdown");
    menu.classList.toggle("show-dropdown");
}