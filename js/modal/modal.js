const openModalLogin = document.querySelector (".fa-circle-user");
const closeModalLogin = document.querySelector (".fa-circle-xmark");
const modalElement =  document.querySelector(".modal");

openModalLogin.addEventListener ('click', (e) => {
    e.preventDefault();
    modalElement.classList.add("show");
});

closeModalLogin.addEventListener ('click', () => {
    modalElement.classList.remove("show");
});