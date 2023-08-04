const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json();
    jokeEL.innerHTML = await googleTranslate(data.joke, "fr")
}

function googleTranslate(text, targetLanguage) {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLanguage + "&dt=t&q=" + encodeURI(text);
    return fetch(url)
        .then(response => response.json())
        .then(data => data[0][0][0]);
}

