document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector(".header").offsetHeight, // Adjust for fixed header
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

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mobileMenuOverlay.classList.add("is-open")
    })
  }

  if (menuClose) {
    menuClose.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("is-open")
    })
  }

  // Close mobile menu when clicking outside (optional, but good UX)
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("is-open")
      }
    })
  }

  // Fetch events data (example of interacting with a backend API)
  async function fetchEvents() {
    const eventsListDiv = document.getElementById("events-list")
    if (!eventsListDiv) return

    try {
      // Assuming /api/events is still running as a Next.js API route or similar backend
      const response = await fetch("/api/events")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const events = await response.json()

      if (events.length > 0) {
        eventsListDiv.innerHTML =
          "<h3>開催イベント一覧:</h3><ul>" +
          events.map((event) => `<li>${event.name} - ${event.date} (${event.time})</li>`).join("") +
          "</ul>"
      } else {
        eventsListDiv.innerHTML = "<p>現在、開催予定のイベントはありません。</p>"
      }
    } catch (error) {
      console.error("イベントデータの取得に失敗しました:", error)
      eventsListDiv.innerHTML = "<p>イベント情報の読み込み中にエラーが発生しました。</p>"
    }
  }

  fetchEvents()

  // Handle contact form submission (example)
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData.entries())

      try {
        // Assuming /api/contact is still running as a Next.js API route or similar backend
        const response = await fetch("/api/contact", {
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
        console.error("フォーム送信エラー:", error)
        alert("お問い合わせの送信中にエラーが発生しました。")
      }
    })
  }
})
