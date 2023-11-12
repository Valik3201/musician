function toggleNavbar() {
  const mobileNavbar = document.querySelector(".mobile-navbar");
  const burger = document.querySelector(".burger");
  mobileNavbar.classList.toggle("active");
  burger.classList.toggle("active");
}

// Close the mobile navbar when a link is clicked
document.querySelectorAll(".mobile-navbar a").forEach((item) => {
  item.addEventListener("click", () => {
    const mobileNavbar = document.querySelector(".mobile-navbar");
    const burger = document.querySelector(".burger");
    mobileNavbar.classList.remove("active");
    burger.classList.remove("active");
  });
});
