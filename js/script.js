// const switchModeStorage = localStorage.getItem('')

function switchClass(element, antiga, novo){
    element.classList.remove(antiga)
    element.classList.add(novo)
}

const switchMode = document.querySelector('#switch-mode')

switchMode.addEventListener('click', () => {

    let theme = document.querySelector('#theme')
    let themeTop = document.querySelector('#top')
    let themeCard = document.querySelector('.card')

    if(switchMode.checked){
        
        console.log(theme)
        switchClass(theme, 'dark-theme', 'light-theme')
        switchClass(themeTop, 'dark-theme-top', 'light-theme-top')
        switchClass(themeCard, 'card-dark', 'light-card')

    } else{
        console.log(theme)

        switchClass(theme, 'light-theme', 'dark-theme')
        switchClass(themeTop, 'light-theme-top', 'dark-theme-top')
        switchClass(themeCard, 'light-card', 'card-dark')
    }

})




