document.addEventListener('DOMContentLoaded', () => {
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const translations = {
        de: {
            title: "Umfrage",
            intro: "Hallo, wie ich in meiner Mail gesagt habe, habe ich ein paar Fragen an euch alle. Bitte nehmt euch die Zeit, sie zu beantworten.",
            anonNotice: "Dies ist vollständig anonym, solange Sie hier nicht Ihren Ingame-Namen eingeben:",
            nameLabel: "Ingame Name:",
            question1: "Erste Frage: Wirst du nächste Saison bei uns bleiben?",
            optionsIntro: "Wir haben mehrere Optionen für die nächste Saison. Bitte lesen Sie sie durch und beantworten Sie die folgenden Fragen:",
            optionA: "Option A:",
            optionADesc: "Wir warten bis September und entspannen auf dem Server. Wenn die Anmeldung öffnet, melden wir uns an. Denken Sie daran, dass wir dann auch eine Anmeldephase durchlaufen müssen! Wir würden ~40 Tage warten, bis es öffnet, und dann mindestens weitere 21 Tage, bis es beginnt. Aber: Wir könnten Ressourcen, Beschleunigungen und Rekruten sammeln.",
            optionB: "Option B:",
            optionBDesc: "Wir gehen sofort auf die Insel. Das würde bedeuten, dass wir uns am Montag anmelden und dann etwa 21 Tage (3 Wochen) warten und sofort loslegen. Weniger Chancen, Beschleunigungen oder andere Dinge zu sammeln, weniger Zeit zur Organisation, aber wir würden uns nicht langweilen. Wir könnten entscheiden, ob wir eine entspannte Insel machen, einfach ein Ziel auswählen und es angreifen, ob wir Diplo machen oder nicht, usw.",
            optionC: "Option C:",
            optionCDesc: "Wir gehen sofort ins Ödland. Das würde auch bedeuten, dass wir uns am Montag anmelden und dann auch 21 Tage warten und loslegen. Auch nicht viel Zeit, um Beschleunigungen zu sammeln usw. und weniger Zeit zur Organisation. Das Gute und Schlechte gleichzeitig ist, dass viele von uns nicht oft ins Ödland gegangen sind, also könnte es etwas anderes und aufregendes sein, aber das bedeutet auch, dass wir uns anders organisieren und viel lernen müssen. Wir wären wieder an ein Lager und Schutzzeiten gebunden.",
            question2: "Welche Option bevorzugen Sie?",
            feedback: "Last but not least: Möchten Sie noch weiteres Feedback oder Gedanken geben?",
            resultTitle: "Vielen Dank für Ihre Teilnahme!",
            resultMessage: "Ihre Antworten wurden aufgezeichnet."
        },
        en: {
            title: "Survey",
            intro: "Hello, like I said in my mail, I have some questions for all of you. Please take the time to answer them.",
            anonNotice: "This is completely anonymous as long as you do not type your ingame name here:",
            nameLabel: "Ingame Name:",
            question1: "First Question: Will you stay with us for the next Season?",
            optionsIntro: "We have multiple options for next season, please read through them and answer the questions below:",
            optionA: "Option A:",
            optionADesc: "We wait until September and chill on server. When registration opens we sign-up. Remember that we will then have a sign-up phase to wait through too! We would wait for ~40 Days until it opens, then at least another 21 days until it starts. But: We would be able to gather resources, speed-ups and recruit.",
            optionB: "Option B:",
            optionBDesc: "We go to island immediately. That would mean, signing up on Monday, then around 21 days (3 weeks) and go immediately. Less chance to gather speedups or anything else, less time to organise but we would not get bored. We could decide if we do a chill island, just decide on a target and hit them, if we do diplo or not, etc.",
            optionC: "Option C:",
            optionCDesc: "We go to Barren Lands immediately. That would mean, signing up on Monday too, then also 21 days and go. Also not much time to gather speedups etc. and less time to organise. The good and bad thing at the same time is, that many of us have not gone to Barren Land a lot, so it might be something different and exciting, but that also means, that we have to organise differently and learn a lot. We once again would be bound to a camp and protection times.",
            question2: "Which option would you prefer?",
            feedback: "Last but not least: Any other feedback or thoughts, you would like to give?",
            resultTitle: "Thank you for your participation!",
            resultMessage: "Your responses have been recorded."
        }
    };

    function setLanguage(lang) {
        document.getElementById('title').innerText = translations[lang].title;
        document.getElementById('intro').innerText = translations[lang].intro;
        document.getElementById('anonNotice').innerText = translations[lang].anonNotice;
        document.getElementById('nameLabel').innerText = translations[lang].nameLabel;
        document.getElementById('question1').innerText = translations[lang].question1;
        document.getElementById('optionsIntro').innerText = translations[lang].optionsIntro;
        document.getElementById('optionA').innerText = translations[lang].optionA;
        document.getElementById('optionADesc').innerText = translations[lang].optionADesc;
        document.getElementById('optionB').innerText = translations[lang].optionB;
        document.getElementById('optionBDesc').innerText = translations[lang].optionBDesc;
        document.getElementById('optionC').innerText = translations[lang].optionC;
        document.getElementById('optionCDesc').innerText = translations[lang].optionCDesc;
        document.getElementById('question2').innerText = translations[lang].question2;
        document.getElementById('feedback').innerText = translations[lang].feedback;
        document.getElementById('resultTitle').innerText = translations[lang].resultTitle;
        document.getElementById('resultMessage').innerText = translations[lang].resultMessage;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        db.collection("surveyResponses").add(data)
        .then(() => {
            document.getElementById('surveyForm').style.display = 'none';
            document.getElementById('result').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    }

    // Set default language to English
    setLanguage('en');
});
