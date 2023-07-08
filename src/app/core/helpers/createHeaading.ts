export function createHeading(text: string): HTMLDivElement {
    const skillsHeading: HTMLDivElement = document.createElement('div')
    skillsHeading.classList.add('heading')
    const skillsHeadingText: HTMLHeadingElement = document.createElement('h3')
    skillsHeadingText.textContent = text
    skillsHeading.append(skillsHeadingText)

    return skillsHeading
}