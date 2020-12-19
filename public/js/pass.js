const pass = document.querySelector(`input[name='password']`)
const confirmPass = document.querySelector(`input[name='confirm password']`)
const submit = document.querySelector(`button[type='submit']`)

confirmPass.addEventListener('keyup', () => {
    if (pass.value !== confirmPass.value) {
        error.innerText = 'Passwords do not match'
        error.classList.remove('hidden')
        submit.disabled = true
    } else {
        error.innerText = ''
        error.classList.add('hidden')
        submit.disabled = false
    }
})
