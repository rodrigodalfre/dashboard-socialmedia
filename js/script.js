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

function switchClass(element, oldTheme, newTheme){
    element.classList.remove(oldTheme)
    element.classList.add(newTheme)
}

function forClass(element, oldTheme, newTheme){
    for(i = 0; i < element.length; i++){
        switchClass(element[i], oldTheme, newTheme)
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
