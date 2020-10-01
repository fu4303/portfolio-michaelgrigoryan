const contactMeLink = document.getElementById("contactBtn");
const contactMeDiv = document.getElementById("contactMe");
const contactMeCloseButton = document.getElementById("formClose");
const main = document.getElementById("main")

const openContactWindow = () => {
    const closeForm = () => {
        main.classList.remove("hidden");
        contactMeDiv.classList.add("hidden");
    }
    contactMeDiv.classList.remove("hidden");
    main.classList.add("hidden")
    contactMeCloseButton.addEventListener("click", closeForm);
};

contactMeLink.addEventListener("click", openContactWindow);