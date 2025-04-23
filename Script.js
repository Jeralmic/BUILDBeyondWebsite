const words = ['students', 'entrepreneurs', 'alumni', 'innovators', 'leaders', 'builders'];
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
