async function loadSilly() {
    const url = 'https://official-joke-api.appspot.com/jokes/random/1'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const dataSilly = await loadSilly();
console.log(dataSilly); // gibt die Daten der API oder false in der Konsole aus

async function loadBrainrot() {
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const dataBrainrot = await loadBrainrot();
console.log(dataBrainrot); // gibt die Daten der API oder false in der Konsole aus

const button_happy = document.querySelector('#happy');
const button_sad = document.querySelector('#sad');
const button_anxious = document.querySelector('#anxious');
const button_bored = document.querySelector('#bored');
const button_next = document.querySelector('#next-mood-biter');
const image_face = document.querySelector('.face');
const selection_moodbiter = document.querySelector('#mood-biter');
const selection_moodquestion = document.querySelector('#mood-question');

button_happy.addEventListener('click', function () {
    button_next.classList.remove('hidden');
    image_face.src = 'img/Face_Happy.svg';
});

button_sad.addEventListener('click', function () {
    button_next.classList.remove('hidden');
    image_face.src = 'img/Face_Sad.svg';
});

button_anxious.addEventListener('click', function () {
    button_next.classList.remove('hidden');
    image_face.src = 'img/Face_Anxious.svg';
});

button_bored.addEventListener('click', function () {
    button_next.classList.remove('hidden');
    image_face.src = 'img/Face_Bored.svg';
});
button_next.addEventListener('click', function () {
    selection_moodbiter.classList.remove('hidden');
    selection_moodquestion.classList.add('hidden');
});

const button_silly = document.querySelector('#silly');
const button_brainrot = document.querySelector('#brainrot');
const button_positive = document.querySelector('#positive');
const button_next_silly = document.querySelector('#next-silly');
const selection_brainrot = document.querySelector('#mood-brainrot');
const selection_silly = document.querySelector('#mood-silly');
const selection_positive = document.querySelector('#mood-positive');

button_brainrot.addEventListener('click', function () {
    selection_brainrot.classList.remove('hidden');
    selection_moodbiter.classList.add('hidden');
});

button_silly.addEventListener('click', function () {
    selection_silly.classList.remove('hidden');
    selection_moodbiter.classList.add('hidden');
});

button_positive.addEventListener('click', function () {
    selection_positive.classList.remove('hidden');
    selection_moodbiter.classList.add('hidden');
});


