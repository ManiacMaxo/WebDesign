const error = document.querySelector('.message')

const urlParams = new URLSearchParams(window.location.search)
const err = urlParams.get('err')

switch (err) {
    case 'exists':
        error.classList.toggle('hidden')
        error.innerText = `An application like this already exists`
        break
    case 'incorrect':
        error.classList.toggle('hidden')
        error.innerText = `Why are you trying to break me`
        break
}
