const card1 = document.querySelector(".card1__inner");

card1.addEventListener('click', function (e) {
    card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card2__inner");

card2.addEventListener('click', function (e) {
    card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card3__inner");

card3.addEventListener('click', function (e) {
    card3.classList.toggle('is-flipped');
});