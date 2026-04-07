document.addEventListener("click", function (event) {
  var link = event.target.closest("a[data-cta-track]");

  if (!link || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "cta_click", {
    cta_label: link.dataset.ctaLabel || link.textContent.trim(),
    cta_location: link.dataset.ctaLocation || "",
    cta_type: link.dataset.ctaType || "",
    destination: link.href || ""
  });
});
