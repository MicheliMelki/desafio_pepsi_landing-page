// ALTERAÇÃO DE IMAGENS NA PÁGINA
function imgSlider(anything) {
  document.querySelector(".pepsi").src = anything;
}
// MUDANÇA DE COR DE FUNDO
function chanceBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");

  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
