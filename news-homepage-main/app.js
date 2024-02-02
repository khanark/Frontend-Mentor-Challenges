const navBtn = document.querySelector(".btn-nav");
const mobileNav = document.querySelector(".mobile-nav-wrapper");

navBtn.addEventListener("click", (e) => {
    mobileNav.classList.toggle("show");
    e.currentTarget.classList.toggle("close");
});

console.log("This is some test");

mobileNav.addEventListener("click", (e) => {
    const nav = e.target;
    if (
        !nav.classList.contains("mobile-nav-wrapper") &&
        !nav.classList.contains("show")
    )
        return;
    mobileNav.classList.toggle("show");
    navBtn.classList.toggle("close");
});

document.querySelector(".menu-toggle").addEventListener(
    "change",
    (e) => {
        e.currentTarget.checked
            ? (document.documentElement.style.overflowY = "hidden")
            : (document.documentElement.style.overflowY = "");
    },
    false
);
