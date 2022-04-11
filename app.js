const button1 = document.getElementById(`one`)

button1.onclick = function() {
    alert('You clicked the first button! Congrats!');
};

const h3 = document.querySelector('h3');

h3.addEventListener(`mouseover` , () => {
    alert('You hovered over the h3 element! Congrats!');
},{once: true});

const form = document.querySelector('form');

form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value; alert (`${entry}`);
});

const darkMode = document.getElementById(`dm`);

const body = document.querySelector('body');
darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark-mode`);
});

const times = document.querySelector('times');

let x = 0;
times.addEventListener(`click` , () => {
    x++;
    if (x <= 2){
        alert('You click the last button! Congrats!')
    } else if (x === 3){
        alert(`OH NO! This button is not going to work anymore!`)
    } else {
        times.disabled = true;
    }
    });