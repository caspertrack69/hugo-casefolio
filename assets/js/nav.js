/* Mobile navigation toggle — vanilla, accessible, reduced-motion safe. */
(function () {
  "use strict";
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });
})();
