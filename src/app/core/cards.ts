import { createSkilsWrapper } from "./skills";

const btns: NodeListOf<Element> | null = document.querySelectorAll('.card__flip')
const info: HTMLElement | null = document.getElementById('info')
const footer: HTMLElement | null = document.querySelector('.footer')
const [skills, settings, works, about] = Array.from(btns)

btns.forEach(element => {
    element.addEventListener('click', (event) => {

        if (event.target === skills) {
            createSkilsWrapper()
            
            info && (info.style.display = 'block' )
            footer && (footer.style.display = 'block' )
            info?.scrollIntoView({ behavior: 'smooth' })
        }
    })
})

