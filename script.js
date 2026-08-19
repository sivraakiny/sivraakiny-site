(() => {
  const intro = document.getElementById("intro");
  const info = document.getElementById("information");

  // One cinematic sequence per page load:
  // settle -> tiny flash crosses wordmark -> horizontal cut opens -> information appears.
  setTimeout(() => intro.classList.add("fire"), 1450);

  setTimeout(() => {
    intro.classList.add("split");
    info.classList.add("revealed");
  }, 1900);

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "auto";
  }, 3150);
})();