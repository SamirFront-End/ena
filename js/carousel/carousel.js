

const carouselCont = document.querySelector('.carousel-container');
const ctrl = document.querySelectorAll('.ctrl');
let currentIndex = 0;

function moveToIndex(index) {
    const mov = index * -33.3;
    carouselCont.style.transform = `translateX(${mov}%)`;

    ctrl.forEach((control, i) => {
        ctrl[i].classList.remove('activo');
    });
    ctrl[index].classList.add('activo');

    currentIndex = index;
}

ctrl.forEach((control, i) => {
    ctrl[i].addEventListener('click', () => {
        moveToIndex(i);
    });
});
function autoSlide() {
    const nextIndex = (currentIndex + 1) % ctrl.length;
    moveToIndex(nextIndex);
}

const interval = setInterval(autoSlide, 5000);
// ctrl.forEach((control, i) => {
//     ctrl[i].addEventListener('click', () => {
//         clearInterval(interval);
//     });
// });
