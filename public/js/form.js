const body = document.querySelector('body')
const form = document.querySelector('form')
const error = document.querySelector('.error-message')

const urlParams = new URLSearchParams(window.location.search)
const exists = urlParams.get('exists')

if (exists === 'true') {
    error.innerText = `An application like this already exists`
}

form.addEventListener('submit', (event) => {})
