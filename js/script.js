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

async function loadPositive() {
    const url = 'https://gomezmig03.github.io/MotivationalAPI/en.json'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const dataPositive = await loadPositive();
console.log(dataPositive); // gibt die Daten der API oder false in der Konsole aus

const button_happy = document.querySelector('#happy');
const button_sad = document.querySelector('#sad');
const button_anxious = document.querySelector('#anxious');
const button_bored = document.querySelector('#bored');
const button_next = document.querySelector('#next-mood-question');
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

const div_brainrot = document.querySelector('.mood-brainrot-text-container');

document.querySelector('.mood-brainrot-text').innerHTML = dataBrainrot.text;

const brainrot_button_next = document.querySelector('#mood-brainrot-button');
const brainrot_text = document.querySelector('.mood-brainrot-text');

// brainrot_button_next.addEventListener('click', function () {

// });

const loadNewFact = () => {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
        .then(response => response.json())
        .then(data => {
            brainrot_text.innerHTML = data.text; 
        })
        .catch(error => {
            console.error('Fehler beim Laden des Fun Facts:', error);
           brainrot_text.innerHTML = "Oops, konnte keinen neuen Fakt laden.";
        });
};
loadNewFact();
brainrot_button_next.addEventListener('click', loadNewFact);

const allLogos = document.querySelectorAll('.logo');

allLogos.forEach(logo => {

    logo.addEventListener('click', () => {
        window.location.reload();


    });
});

const imDoneButtons = document.querySelectorAll('.button-imdone');

imDoneButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Alle Sections ausblenden
        document.querySelectorAll('.mood-logo').forEach(section => {
            section.classList.add('hidden');
        });

        document.querySelectorAll('#mood-question').forEach(section => {
            section.classList.add('hidden');
        });

        // Nur die Abschluss-Seite anzeigen
        const moodFinishSection = document.getElementById('mood-finish');
        moodFinishSection.classList.remove('hidden');
    });
});

const changeMoodButtons = document.querySelectorAll('.button-changemood');

changeMoodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Alle Sections ausblenden
        document.querySelectorAll('.mood-logo').forEach(section => {
            section.classList.add('hidden');
        });

        document.querySelectorAll('#mood-question').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Nur die Abschluss-Seite anzeigen
        const moodFinishSection = document.getElementById('mood-biter');
        moodFinishSection.classList.remove('hidden');
    });
});

const div_silly = document.querySelector('.mood-silly-container');

document.querySelector('.mood-silly-text').innerHTML = dataBrainrot.text;

const silly_button_next = document.querySelector('#mood-silly-button');
const silly_text = document.querySelector('.mood-silly-text');
const silly_text2 = document.querySelector('#mood-silly-text-answer');
const imStupid_button = document.querySelector('#im-stupid');
const sillyTextAnswer = document.querySelector('#silly-text-answer');

const loadNewFactSilly = () => {
    fetch('https://official-joke-api.appspot.com/jokes/random/1')
        .then(response => response.json())
        .then(data => {
            silly_text.innerHTML = data[0].setup;
            silly_text2.innerHTML = data[0].punchline;
            sillyTextAnswer.classList.add('hidden');
        })
        .catch(error => {
            console.error('Fehler beim Laden des Fun Facts:', error);
           silly_text.innerHTML = "Oops, konnte keinen neuen Fakt laden.";
        });
};
loadNewFactSilly();
silly_button_next.addEventListener('click', loadNewFactSilly);

imStupid_button.addEventListener('click', function () {
    sillyTextAnswer.classList.remove('hidden');
});

const div_positive = document.querySelector('.mood-positive-container');
const positive_text = document.querySelector('.mood-positive-text');
const positive_button_next = document.querySelector('#mood-positive-button');

let number = 0;
function loadNewFactPositive() {
    fetch('https://gomezmig03.github.io/MotivationalAPI/en.json')
        .then(response => response.json())
        .then(data => {
            positive_text.innerHTML = data[number].phrase; 
        })
        .catch(error => {
            console.error('Fehler beim Laden des Fun Facts:', error);
           positive_text.innerHTML = "Oops, konnte keinen neuen Fakt laden.";
        });
};
loadNewFactPositive();
positive_button_next.addEventListener('click', function (){
    
    if (number >= dataPositive.length -1) {
        number = 0;
    }
    else {
        number = number + 1;
    }
    loadNewFactPositive();
});

const button_better = document.querySelector('#button-mood-better');
const button_worse = document.querySelector('#button-mood-worse');
const button_feel = document.querySelector('#button-mood-feel');
const section_moodFinish = document.querySelector('#mood-finish');
const section_moodDone = document.querySelector('#mood-done');
const section_moodFailed = document.querySelector('#mood-failed');

button_better.addEventListener('click', function () {
    section_moodDone.classList.remove('hidden');
    section_moodFinish.classList.add('hidden');
});

[button_worse, button_feel].forEach(button => {
    button.addEventListener('click', function () {
        section_moodFailed.classList.remove('hidden');
        section_moodFinish.classList.add('hidden');
    });
});

const button_biteAgain = document.querySelector('#mood-failed-button');

button_biteAgain.addEventListener('click', function () {
    section_moodFailed.classList.add('hidden');
    selection_moodbiter.classList.remove('hidden');
});



