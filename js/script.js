// const switchModeStorage = localStorage.getItem('')

function switchClass(element, antiga, novo){
    element.classList.remove(antiga)
    element.classList.add(novo)
}

function forClass(element, antiga, novo){
    for(i = 0; i < element.length; i++){
        switchClass(element[i], antiga, novo)
    }
}

const switchMode = document.querySelector('#switch-mode')

switchMode.addEventListener('click', () => {

    let theme = document.querySelector('#theme')
    let themeTop = document.querySelector('#top')
    let themeCard = document.querySelectorAll('div.card')
    let overview = document.querySelector('.overview')
    let todayCard = document.querySelectorAll('div.today-card')

    if(switchMode.checked){
    
        switchClass(theme, 'dark-theme', 'light-theme')
        switchClass(themeTop, 'dark-theme-top', 'light-theme-top')
        switchClass(overview, 'overview-dark', 'overview-light')

        forClass(themeCard, 'card-dark', 'card-light')
        forClass(todayCard, 'card-dark', 'card-light')

    } else{
    
        switchClass(theme, 'light-theme', 'dark-theme')
        switchClass(themeTop, 'light-theme-top', 'dark-theme-top')
        switchClass(overview, 'overview-light', 'overview-dark')

        forClass(themeCard, 'card-light', 'card-dark')
        forClass(todayCard, 'card-light', 'card-dark')
        
    }

})


