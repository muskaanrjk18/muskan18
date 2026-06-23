const roles = [
    "Developer",
    "Designer",
    "Adobe Photoshop",
    "AI Illustrator",
    "Commercial Videographer",
    "Content Creator"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


function openCertificate(src){
    document.getElementById("certificateModal").style.display = "flex";
    document.getElementById("certificateImage").src = src;
}

function closeCertificate(){
    document.getElementById("certificateModal").style.display = "none";
}


function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("show");
    document.getElementById("hamburger").classList.toggle("active");
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
        document.getElementById("hamburger").classList.remove("active");
    });
});