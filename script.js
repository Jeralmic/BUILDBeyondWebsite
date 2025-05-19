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
      if (callback) callback();
    })
    .catch(err => {
      console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML('nav-placeholder', 'nav.html', () => {
    // Hamburger menu toggle for mobile
    const toggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
    // Dropdown tap-to-open for mobile
    document.querySelectorAll('.dropbtn').forEach(btn => {
      btn.addEventListener('click', e => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          const wrapper = btn.parentElement;
          wrapper.classList.toggle('open');
        }
      });
    });
  });

  // Do the same for your footer if needed
  includeHTML('footer-placeholder', 'footer.html');
});
