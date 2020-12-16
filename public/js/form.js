const body = document.querySelector('body')
const form = document.querySelector('form')
const error = document.querySelector('.error-message')

const urlParams = new URLSearchParams(window.location.search)
const exists = urlParams.get('exists')

if (exists === 'true') {
    error.innerText = `An application like this already exists`
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll('form > .input-group > input')
    inputs.forEach((input) => {
        console.log(input.value, input.name)
        // switch (input.name) {
        //     case 'name':
        //         if (input.value.length() < 0) {
        //         }
        // }
    })
})
