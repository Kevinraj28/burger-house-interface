const menuBTN = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav_links");

const menuBTNIcon = menuBTN.querySelector("i");

menuBTN.addEventListener("click", (e) =>{

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBTNIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{

    navLinks.classList.remove("open");
    menuBTNIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".order_card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event_content",{
    duration: 1000,
});
