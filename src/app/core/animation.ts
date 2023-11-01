import { AttributesValue } from "../consts/options"

function setProgressBarValues(): void {
    const progressBars: NodeListOf<Element> = document.querySelectorAll('.progress-bar')

    progressBars.forEach((progress) => {
        const progressClass: string = progress.classList[1]
        const attributeValue: number = AttributesValue[progressClass]

        attributeValue && (progress.setAttribute('value', `${attributeValue}`))
    })
}

function handleScroll(): void {
    const skillsSection: HTMLElement | null = document.getElementById('info')

    if (skillsSection) {
        const skillsSectionTop: number = skillsSection.getBoundingClientRect().top
        const windowHeight: number = window.innerHeight
        if (skillsSectionTop < windowHeight) {
            setProgressBarValues()
        }
    }
}

window.addEventListener('scroll', handleScroll)

setTimeout(() => handleScroll(), 300)