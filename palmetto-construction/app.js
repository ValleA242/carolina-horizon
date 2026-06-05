/* ========= PALMETTO CONSTRUCTION — interactions ========= */
(function () {
  "use strict";

  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }
  // icons may load after DOM; try now + on load
  initIcons();
  window.addEventListener("load", initIcons);

  document.addEventListener("DOMContentLoaded", function () {
    initIcons();

    /* ---- year ---- */
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    /* ---- mobile nav ---- */
    var burger = document.getElementById("burger");
    var navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      burger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { navLinks.classList.remove("open"); });
      });
    }

    /* ---- HERO carousel ---- */
    (function () {
      var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
      var dotsWrap = document.getElementById("heroDots");
      var prev = document.getElementById("heroPrev");
      var next = document.getElementById("heroNext");
      if (!slides.length) return;
      var idx = 0, timer = null;
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        if (i === 0) b.className = "active";
        b.setAttribute("aria-label", "Slide " + (i + 1));
        b.addEventListener("click", function () { go(i); reset(); });
        dotsWrap.appendChild(b);
      });
      var dots = Array.prototype.slice.call(dotsWrap.children);
      function go(n) {
        idx = (n + slides.length) % slides.length;
        slides.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
        dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
      }
      function reset() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 6000); }
      if (prev) prev.addEventListener("click", function () { go(idx - 1); reset(); });
      if (next) next.addEventListener("click", function () { go(idx + 1); reset(); });
      reset();
    })();

    /* ---- TESTIMONIALS carousel ---- */
    (function () {
      var reviews = Array.prototype.slice.call(document.querySelectorAll(".review"));
      var dotsWrap = document.getElementById("reviewDots");
      if (!reviews.length || !dotsWrap) return;
      var idx = 0, timer = null;
      reviews.forEach(function (_, i) {
        var b = document.createElement("button");
        if (i === 0) b.className = "active";
        b.setAttribute("aria-label", "Review " + (i + 1));
        b.addEventListener("click", function () { go(i); reset(); });
        dotsWrap.appendChild(b);
      });
      var dots = Array.prototype.slice.call(dotsWrap.children);
      function go(n) {
        idx = (n + reviews.length) % reviews.length;
        reviews.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
        dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
      }
      function reset() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 7000); }
      reset();
    })();

    /* ---- STATS count-up (setInterval — rAF is throttled in some hosts) ---- */
    (function () {
      var nums = Array.prototype.slice.call(document.querySelectorAll(".stat .num"));
      var sec = document.querySelector(".stats");
      if (!nums.length || !sec) return;
      var started = false;
      function animate() {
        if (started) return;
        started = true;
        nums.forEach(function (el) {
          var target = parseInt(el.getAttribute("data-count"), 10) || 0;
          var suffix = el.getAttribute("data-suffix") || "";
          var dur = 1500, t0 = Date.now();
          var iv = setInterval(function () {
            var p = Math.min((Date.now() - t0) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString() + (p >= 1 ? suffix : "");
            if (p >= 1) { el.textContent = target.toLocaleString() + suffix; clearInterval(iv); }
          }, 33);
        });
      }
      var poll = setInterval(function () {
        var r = sec.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.85 && r.bottom > 0) { animate(); clearInterval(poll); }
      }, 120);
    })();

    /* ---- QUOTE form ---- */
    (function () {
      var form = document.getElementById("quoteForm");
      var ok = document.getElementById("formSuccess");
      if (!form) return;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var invalid = false;
        form.querySelectorAll("[required]").forEach(function (f) {
          if (!f.value.trim()) {
            invalid = true;
            f.style.borderColor = "#8B2020";
            f.style.boxShadow = "0 0 0 3px rgba(139,32,32,.18)";
          } else {
            f.style.borderColor = "";
            f.style.boxShadow = "";
          }
        });
        if (invalid) return;
        if (ok) {
          ok.classList.add("show");
          initIcons();
        }
        form.querySelectorAll("input,select,textarea").forEach(function (f) { f.value = ""; });
        if (ok) ok.scrollIntoView ? null : null;
      });
    })();
  });
})();
