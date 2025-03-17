document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".mainuopen");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");

    menuOpen.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });
});
