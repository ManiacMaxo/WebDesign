const pass = document.querySelector(`input[name='password']`)
const confirmPass = document.querySelector(`input[name='confirm password']`)
const validPass = document.querySelector('#passerror')
const submit = document.querySelector('#submit')

confirmPass.addEventListener('keyup', () => {
    if (pass.value !== confirmPass.value) {
        validPass.style.display = 'block'
        submit.disabled = true
    } else {
        validPass.style.display = 'none'
        submit.disabled = false
    }
})
