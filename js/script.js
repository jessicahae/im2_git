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

button_happy.addEventListener('click', function () {
    button_next.classList.remove('hidden');
});

button_sad.addEventListener('click', function () {
    button_next.classList.remove('hidden');
});

button_anxious.addEventListener('click', function () {
    button_next.classList.remove('hidden');
});

button_bored.addEventListener('click', function () {
    button_next.classList.remove('hidden');
});

