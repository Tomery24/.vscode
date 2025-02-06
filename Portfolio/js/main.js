// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Active Navigation Highlight on Scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 60;  // Adjusted offset
    document.querySelectorAll('nav ul li a').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.id = "dark-mode-btn";
document.body.insertBefore(darkModeBtn, document.body.firstChild);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Save dark mode preference in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
