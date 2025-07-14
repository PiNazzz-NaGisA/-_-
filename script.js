document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (document.querySelector(".header")?.offsetHeight || 0), // Adjust for fixed header
          behavior: "smooth",
        })
      }

      // Close mobile menu if open
      const mobileMenu = document.querySelector(".mobile-menu-overlay")
      if (mobileMenu && mobileMenu.classList.contains("is-open")) {
        mobileMenu.classList.remove("is-open")
      }
    })
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const menuClose = document.querySelector(".menu-close")
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay")

  if (menuToggle && mobileMenuOverlay) {
    menuToggle.addEventListener("click", () => {
      mobileMenuOverlay.classList.add("is-open")
    })
  }

  if (menuClose && mobileMenuOverlay) {
    menuClose.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("is-open")
    })
  }

  // Example of fetching data from a backend API
  // This assumes your Next.js API routes are still running or you have a similar backend.
  async function fetchEvents() {
    try {
      const response = await fetch("/api/events") // Adjust URL if your backend is elsewhere
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const events = await response.json()
      const eventsListDiv = document.getElementById("events-list")
      if (eventsListDiv) {
        eventsListDiv.innerHTML = "" // Clear "Loading..." message
        if (events.length > 0) {
          events.forEach((event) => {
            const eventElement = document.createElement("div")
            eventElement.className = "event-item" // Add a class for styling if needed
            eventElement.innerHTML = `
                            <h3>${event.name}</h3>
                            <p>${event.date} - ${event.time}</p>
                            <p>${event.description}</p>
                        `
            eventsListDiv.appendChild(eventElement)
          })
        } else {
          eventsListDiv.innerHTML = "<p>現在、イベント情報はありません。</p>"
        }
      }
    } catch (error) {
      console.error("イベント情報の取得に失敗しました:", error)
      const eventsListDiv = document.getElementById("events-list")
      if (eventsListDiv) {
        eventsListDiv.innerHTML = "<p>イベント情報の読み込み中にエラーが発生しました。</p>"
      }
    }
  }

  // Call fetchEvents when the page loads
  fetchEvents()

  // Handle contact form submission
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData.entries())

      try {
        const response = await fetch("/api/contact", {
          // Adjust URL if your backend is elsewhere
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          alert("お問い合わせが正常に送信されました。")
          contactForm.reset()
        } else {
          alert("お問い合わせの送信に失敗しました。")
        }
      } catch (error) {
        console.error("お問い合わせの送信中にエラーが発生しました:", error)
        alert("お問い合わせの送信中にエラーが発生しました。")
      }
    })
  }
})
