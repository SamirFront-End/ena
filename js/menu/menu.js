const openMenu = document.getElementById("hamb");
const btnHamb = document.getElementById("togg-hamb");

btnHamb.addEventListener("click", () => {
    btnHamb.classList.toggle("close");
    openMenu.classList.toggle("open");
});