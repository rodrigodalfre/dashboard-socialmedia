const switchModeStorage = localStorage.getItem('switchTheme')

if(switchModeStorage === 'light-mode'){
    switchTheme('dark', 'light')
}

function switchTheme(oldTheme, newTheme){
                    //Dark or Light
    
    let theme = document.querySelector('#theme')
    let themeTop = document.querySelector('#top')
    let themeCard = document.querySelectorAll('div.card')
    let overview = document.querySelector('.overview')
    let todayCard = document.querySelectorAll('div.today-card')

    switchClass(theme, oldTheme + '-theme', newTheme + '-theme')
    switchClass(themeTop, oldTheme + '-theme-top', newTheme + '-theme-top')
    switchClass(overview, 'overview-' + oldTheme, 'overview-' + newTheme)

    forClass(themeCard, 'card-' + oldTheme, 'card-' + newTheme)
    forClass(todayCard, 'card-' + oldTheme, 'card-' + newTheme)

}

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

    if(switchMode.checked){
    
        switchTheme('dark', 'light')

        localStorage.setItem('switchTheme', 'light-mode')


    } else{
    
        switchTheme('light', 'dark')

        localStorage.clear()
        
    }

})
