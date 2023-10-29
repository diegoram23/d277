const submitBtn = document.getElementById('btn')
const form = document.getElementById('form')
const match = document.getElementById('match')
const noMatch = document.getElementById('no-match')

form.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value
    const confEmail = document.getElementById('conf-email').value    

    if (email === confEmail) {
        match.style.display = 'block'
        e.preventDefault()
        setTimeout(() => {
            location.reload()
        }, 1500);
    } else {
        e.preventDefault()
        noMatch.style.display = 'block'
        setTimeout(() => {
            location.reload()
        }, 1500);
    }
})