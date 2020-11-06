const contactMeLink = document.getElementById("contactBtn");
const contactMeDiv = document.getElementById("contactMe");
const contactMeCloseButton = document.getElementById("formClose");
const main = document.getElementById("main")

const openContactWindow = () => {
    const closeForm = () => {
        main.classList.remove("hidden");
        main.classList.add("animate__animated");
        main.classList.add("animate__bounceIn");
        contactMeDiv.classList.add("hidden");
    };
    contactMeDiv.classList.remove("hidden");
    main.classList.add("hidden");
    main.classList.add("fadeOut");
    contactMeCloseButton.addEventListener("click", closeForm);
};
contactMeLink.addEventListener("click", openContactWindow);


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml13 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 300 + 30 * i
    });