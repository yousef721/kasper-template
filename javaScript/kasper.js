// Active LInks Navbar
const linksNav = document.querySelectorAll("header nav ul a");
const homeSection = document.querySelector("#home nav ul li:first-child a")
linksNav.forEach((link)=> {
    link.addEventListener("click", ()=> {
        linksNav.forEach((link) => {
            link.classList.remove("active");
        })
        homeSection.classList.add("active")
    });
});
// Make search Input visible
const iconSearch = document.querySelector(".fa-search");
const inputSearch = document.getElementById("search")
document.addEventListener("click", (e) => {
    if (e.target === iconSearch) {
        inputSearch.classList.toggle("active");
    } else if (e.target === inputSearch){
        inputSearch.classList.add("active")
    }
    else {
        inputSearch.classList.remove("active");
    }
})
// Toggle Menu 
const toggleMenu = document.querySelector("#toggle-menu");
document.addEventListener("click", (e) => {
    if (e.target === toggleMenu) {
        toggleMenu.classList.toggle("toggle-menu-active")
    } else {
        toggleMenu.classList.remove("toggle-menu-active")
    }
})
/* Change Background Slider */
// Globle variable
let count = 2;
const next = document.getElementById("next")
const previous = document.getElementById("prev")
const changeBackground = document.querySelectorAll(".landing .change-background");
const landing = document.querySelector(".landing")
const bullets = document.querySelectorAll(".landing .bullets li")
// When Click prev and next
changeBackground.forEach((e) => {
    e.addEventListener("click", (e) => {
        if (e.target === next) {
            nextSlide()
        } else if (e.target === previous) {
            prevSlide()
        }
    })
})
function nextSlide() {
    if (count >= bullets.length) {
        count = 0
    }
    count ++
    landing.style = `background-image: url(/images/download-${count}.jpg);`
    activeBullet()
}
function prevSlide() {
    if (count <= 1) {
        count = bullets.length + 1
    }
    count --
    landing.style = `background-image: url(/images/download-${count}.jpg);`
    activeBullet()
}
// Click On Bullets ChangeBackground
bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
        count = +bullet.getAttribute("data-count")
        landing.style = `background-image: url(/images/download-${count}.jpg);`
    })
})
// Bullets Active When Click Bullet From landing
bullets.forEach((bullet) => {
    bullet.addEventListener("click", function (e) {
        e.preventDefault()
        bullets.forEach((bullet) => {
            bullet.classList.remove("active");
        })
        bullet.classList.add("active");
    })
})
// Bullets Active When Click Next And Previuos 
function activeBullet() {
    removeActive()
    bullets[count - 1].classList.add("active")
}
// Remove Active From All Bullets
function removeActive() {
    bullets.forEach((bullet) => {
        bullet.classList.remove("active")
    })
}
// Active Shuffle
const shuffles = document.querySelectorAll(".protfolio .shuffle li")
shuffles.forEach((shuffle) => {
    shuffle.addEventListener("click" , (e) => {
        e.preventDefault()
        shuffles.forEach((shuffle) => {
            shuffle.classList.remove("active")
        })
        shuffle.classList.add("active")
    })
}) 
// Active Bullets cardes 
const bulletsCardes = document.querySelectorAll(".testimonials-box .bullets li")
bulletsCardes.forEach((bullet) => {
    bullet.addEventListener("click", function (e) {
        e.preventDefault()
        bulletsCardes.forEach((bullet) => {
            bullet.classList.remove("active");
        })
        bullet.classList.add("active");
    })
})