function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});