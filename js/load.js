const mask = document.querySelector('.mask-loader')

window.addEventListener('load', () => {
    mask.classList.add('hide')
    setTimeout(() => {
        mask.remove();
    }, 2000)
})