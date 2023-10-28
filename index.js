const submitBtn = document.getElementById('btn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value
    const confEmail = document.getElementById('conf-email').value    

    if (email === confEmail) {
        console.log('match')
        e.preventDefault()
    } else {
        e.preventDefault()
        console.log('no match')
    }

 
})