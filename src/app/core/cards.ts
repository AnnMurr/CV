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
            scrollToInfo()
        }
    })
})




function scrollToInfo() {
    const infoSection = document.getElementById('info')
    if (infoSection) {
        const infoSectionTop = infoSection.getBoundingClientRect().top
        const scrollStep = infoSectionTop / 20
        let scrollCount = 0

        const scrollAnimation = () => {
            window.scrollBy(0, scrollStep);
            scrollCount++

            if (scrollCount >= 20) { 
                return
            }

            requestAnimationFrame(scrollAnimation)
        }

        scrollAnimation()
    }
}