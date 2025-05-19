const words = ['Leaders', 'entrepreneurs', 'innovators', 'builders'];
let txtEl = document.getElementById('typed-text');
let cursorEl = document.querySelector('.cursor');
let wordIdx = 0, charIdx = 0;
const typeSpeed = 250, eraseSpeed = 100, delay = 1000;

function type() {
  if (charIdx < words[wordIdx].length) {
    txtEl.textContent += words[wordIdx].charAt(charIdx++);
    setTimeout(type, typeSpeed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (charIdx > 0) {
    txtEl.textContent = words[wordIdx].substring(0, --charIdx);
    setTimeout(erase, eraseSpeed);
  } else {
    wordIdx = (wordIdx + 1) % words.length;
    setTimeout(type, typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, delay);
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-images img");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
      dots[idx].classList.toggle("active", idx === i);
    });
    index = i;
  }

  function nextSlide() {
    let next = (index + 1) % slides.length;
    showSlide(next);
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const i = parseInt(dot.getAttribute("data-index"));
      showSlide(i);
    });
  });

  setInterval(nextSlide, 4000); // auto-slide every 4 seconds
});

function includeHTML(id, url, callback) {
  const el = document.getElementById(id);
  if (!el) return;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then(html => {
      el.innerHTML = html;

      // 👇 Trigger a style recalculation to re-activate CSS :hover
      const newEl = el.cloneNode(true);
      el.parentNode.replaceChild(newEl, el);

      if (callback) callback();
    })
    .catch(err => {
      console.error(err);
    });
}


// on DOMContentLoaded, pull in nav & footer
document.addEventListener('DOMContentLoaded', () => {
  includeHTML('nav-placeholder', 'nav.html');
  includeHTML('footer-placeholder', 'footer.html');
});

