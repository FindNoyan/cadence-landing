document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("fillSlot");
  if (!slot) return;
  setTimeout(() => slot.classList.add("is-visible"), 500);
});
