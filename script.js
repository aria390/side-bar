const menuEl = document.getElementById("menu");
const crossEl = document.getElementById("cross");
const sideBarEl = document.getElementById("side-bar");

menuEl.addEventListener("click", () => {
  sideBarEl.classList.toggle("sidebarhide");
});
crossEl.addEventListener("click", () => {
  sideBarEl.classList.add("sidebarhide");
});
