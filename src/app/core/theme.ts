import { toggleThemeButton } from "./cards"
import { ThemeStore } from "../storage/themeStorage"

const elements: NodeListOf<Element> = document.querySelectorAll('.theme')
const toggleThemeButtonText: HTMLElement | null = document.querySelector('.theme-text')

export function toggleTheme(): void {
    const storage: string | null = ThemeStore.getStorage()

    if (storage === 'dark-theme') {
        ThemeStore.setStorage('light-theme')
        toggleThemeButtonText && (toggleThemeButtonText.textContent = 'Dark Theme')
        elements.forEach(element => {
            element.classList.add('white-theme')
        })
    } else {
        ThemeStore.setStorage('dark-theme')
        toggleThemeButtonText && (toggleThemeButtonText.textContent = 'Light Theme')
        elements.forEach(element => {
            element.classList.remove('white-theme')
        })
    }
}

function checkTheme(): void {
    const storage: string | null = ThemeStore.getStorage()

    if (storage === 'light-theme') {
        elements.forEach(element => {
            element.classList.add('white-theme')
        })
    }
}

const init = (): void => {
    toggleThemeButton.addEventListener('click', toggleTheme)
    checkTheme()
}

document.addEventListener('DOMContentLoaded', () => init())