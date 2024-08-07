// Load translations from an external JSON file
const translations = {};

fetch('translations.json')
    .then(response => response.json())
    .then(data => {
        Object.assign(translations, data);
        // Set default language to German
        setLanguage('de');
    })
    .catch(error => console.error('Error loading translations:', error));

function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('question').innerText = translations[lang].question;
    document.getElementById('option1').innerText = translations[lang].option1;
    document.getElementById('option2').innerText = translations[lang].option2;
    document.getElementById('option3').innerText = translations[lang].option3;
    document.querySelector('button[type="button"]').innerText = translations[lang].submitButton;
    document.getElementById('resultTitle').innerText = translations[lang].resultTitle;
    document.getElementById('resultMessage').innerText = translations[lang].resultMessage;
}

function submitVote() {
    document.getElementById('voteForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
