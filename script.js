const translations = {
    de: {
        title: "Online Abstimmung",
        question: "Welche Farbe mögen Sie am liebsten?",
        option1: "Blau",
        option2: "Grün",
        option3: "Rot",
        submitButton: "Abstimmen",
        resultTitle: "Danke für Ihre Abstimmung!",
        resultMessage: "Ihre Stimme wurde gezählt."
    },
    en: {
        title: "Online Voting",
        question: "Which color do you like the most?",
        option1: "Blue",
        option2: "Green",
        option3: "Red",
        submitButton: "Vote",
        resultTitle: "Thank you for voting!",
        resultMessage: "Your vote has been counted."
    }
};

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

// Set default language to German
setLanguage('de');
