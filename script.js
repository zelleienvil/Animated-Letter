function openLetter() {
    const letter = document.querySelector('.letter');
    const flap = document.querySelector('.envelope-flap');

    letter.classList.add('opened');
    flap.classList.add('opened');
}

function resetLetter() {
    const letter = document.querySelector('.letter');
    const flap = document.querySelector('.envelope-flap');

    letter.classList.remove('opened');
    flap.classList.remove('opened');
}