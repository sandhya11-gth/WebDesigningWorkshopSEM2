// Hero Banner Slider

const heroSection = document.querySelector(".hero-section");

const banners = [
    "images/banner1.png",
    "images/banner2.png",
    "images/banner3.png",
    "images/banner4.png"
];

let currentSlide = 0;

// Change Banner
function changeBanner() {
    heroSection.style.backgroundImage = `url('${banners[currentSlide]}')`;

    currentSlide++;

    if (currentSlide >= banners.length) {
        currentSlide = 0;
    }
}

// Auto Slide Every 4 Seconds
setInterval(changeBanner, 4000);

// Initial Banner
changeBanner();


// Manual Buttons

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= banners.length) {
        currentSlide = 0;
    }

    heroSection.style.backgroundImage =
        `url('${banners[currentSlide]}')`;
});

leftBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = banners.length - 1;
    }

    heroSection.style.backgroundImage =
        `url('${banners[currentSlide]}')`;
});


// Search Bar Functionality

const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function searchAmazon() {

    const query = searchInput.value.trim();

    if (query !== "") {

        window.open(
            `https://www.amazon.in/s?k=${encodeURIComponent(query)}`,
            "_blank"
        );
    }
}

searchIcon.addEventListener("click", searchAmazon);

searchInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        searchAmazon();
    }
});


// Back To Top Button

const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Product Card Hover Effect

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-5px)";
        box.style.transition = "0.3s";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});


// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.style.zIndex = "1000";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";
    }

});


// Cart Counter Demo

let cartCount = 0;

const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {

    cartCount++;

    cart.innerHTML =
        `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;

});


// Loading Animation

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "1";

    }, 100);

});