const linkElement = document.querySelector('link[href="./src/app/style/light-theme.scss"]')
const elements = document.querySelectorAll('.theme')

export function toggleTheme() {
    elements.forEach(element=> {
        console.log(element)
        element.classList.toggle('white-theme')
    })
}