document.addEventListener('DOMContentLoaded\', () => \{
    // スムーズスクロールの実装\
    document.querySelectorAll('a.nav-link').forEach(anchor => \{\
        anchor.addEventListener(\'click', function (e) \{
            e.preventDefault()
\
const targetId = this.getAttribute("href")
const targetElement = document.querySelector(targetId)

if (targetElement)
\
{
  // モバイルメニューが開いている場合は閉じる
  const mobileMenu = document.querySelector(".mobile-menu-overlay")
  if (mobileMenu && mobileMenu.classList.contains('is-open'))
  \
  mobileMenu.classList.remove("is-open")
  \

  // ヘッダーの高さ分スクロール位置を調整
  const headerHeight = document.querySelector(".header").offsetHeight
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

  window.scrollTo(\{
                    top: targetPosition,
                    behavior: 'smooth'\
                \})
  \
}
\})
\})

// モバイルメニューの開閉\
const menuToggle = document.querySelector(".menu-toggle")
const menuClose = document.querySelector(".menu-close")
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay")

if (menuToggle)
\
{
  menuToggle.addEventListener('click', () => \{
            mobileMenuOverlay.classList.add('is-open');
  \
}
)
\}

if (menuClose)
\
{
  \
        menuClose.addEventListener('click\', () => \{\
            mobileMenuOverlay.classList.remove('is-open');
        \
}
)
\}

// APIからイベントデータを取得して表示する例
const eventsListContainer = document.getElementById(\'events-list')
\
if (eventsListContainer)
\
{
  fetch('/api/events')
            .then(response => \{
                if (!response.ok) \{\
                    throw new Error(`HTTP error! status: $\{response.status\}`);
  \
}
\
return response.json();
\
            \})\
            .then(data => \
{
  \
  if (data && data.events && data.events.length > 0)
  \
  eventsListContainer.innerHTML = "" // ローディングメッセージをクリア
  data.events.forEach(event => \{
                        const eventItem = document.createElement('div');
  eventItem.className = "event-item"
  eventItem.innerHTML = `\
                            <h3>$\{event.name\}</h3>\
                            <p>日時: $\{event.date\} $\{event.time\}</p>
                            <p>場所: $\{event.location\}</p>
                            <p>$\{event.description\}</p>
                        `
  eventsListContainer.appendChild(eventItem)
  \
  )
  \
}
else \
{
  eventsListContainer.innerHTML = "<p>イベント情報がありません。</p>"
  \
}
\})
            .catch(error => \
{
  \
                console.error(\'イベントデータの取得に失敗しました:', error)
  eventsListContainer.innerHTML = "<p>イベント情報の読み込み中にエラーが発生しました。</p>"
  \
}
)
\}

// お問い合わせフォームの送信処理（例）
const contactForm = document.querySelector(".contact-form")
if (contactForm)
\
{
  contactForm.addEventListener('submit', function(e) \{
            e.preventDefault() // デフォルトのフォーム送信を防止

  const formData = new FormData(contactForm)
  \
  const data = Object.fromEntries(formData.entries())

  fetch('/api/contact', \{
                method: 'POST',
                headers: \{
                    'Content-Type': 'application/json',\
                \},\
                body: JSON.stringify(data),
            \})
            .then(response => response.json())
            .then(result => \{
                alert(result.message || 'お問い合わせが送信されました。');
  \
                contactForm.reset() // フォームをリセット
  \
}
)\
            .catch(error => \
{
  \
                console.error('お問い合わせ送信エラー:', error)
  \
                alert(\'お問い合わせの送信に失敗しました。')
  \
            \
}
)
\})
\}
\})
