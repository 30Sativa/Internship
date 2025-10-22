(function () {
  function buildToc() {
    var content = document.querySelector('.content-inner');
    if (!content) return;
    var headings = content.querySelectorAll('h1, h2, h3');
    var toc = document.getElementById('js-toc');
    if (!toc) return;
    toc.innerHTML = '';

    var counter = { h1: 0, h2: 0, h3: 0 };
    headings.forEach(function (h, idx) {
      if (h.tagName === 'H1') { counter.h1++; counter.h2 = 0; counter.h3 = 0; }
      if (h.tagName === 'H2') { counter.h2++; counter.h3 = 0; }
      if (h.tagName === 'H3') { counter.h3++; }
      if (!h.id) {
        h.id = 'h-' + idx + '-' + h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      var a = document.createElement('a');
      a.href = '#' + h.id;
      var prefix = '';
      if (h.tagName === 'H1') prefix = counter.h1 + '. ';
      if (h.tagName === 'H2') prefix = counter.h1 + '.' + counter.h2 + ' ';
      if (h.tagName === 'H3') prefix = counter.h1 + '.' + counter.h2 + '.' + counter.h3 + ' ';
      a.textContent = (prefix + h.textContent).trim();
      a.className = 'level-' + h.tagName.toLowerCase();
      toc.appendChild(a);
    });

    // Active link on scroll
    var links = toc.querySelectorAll('a');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var active = toc.querySelector('a[href="#' + id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '0px 0px -70% 0px', threshold: 0.01 });

    headings.forEach(function (section) { observer.observe(section); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();


