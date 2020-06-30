const pass = document.querySelector(`input[name='login']`)
const confirmPass = document.querySelector(`input[name='login']`)
const validPass = document.querySelector('#passerror')

confirmPass.addEventListener('keyup', () => {
    if (pass.value !== confirmPass.value) {
        validPass.style.display = 'block'
    } else {
        validPass.style.display = 'none'
    }
})
