document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a")
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute("href"))
      if (target) {
        // Adjust scroll position to account for fixed header
        const headerOffset = document.querySelector("header").offsetHeight
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset - 20 // Added extra padding

        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    })
  })
})
