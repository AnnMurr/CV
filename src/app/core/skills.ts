import { LIST_ELEMENTS, DETAILS_ELEMENTS_DATA } from "../consts/options"

const infoWrapper: HTMLElement | null = document.querySelector('.info__wrapper')

export function createSkilsWrapper() {
    const skills: HTMLElement = document.createElement('div')
    skills.classList.add('skills')

    skills.append(createSkillsHeading('Skills'), createDubleLine(), createSkillsList(), createDetailsWrapper(), createDetailsItemsWrapper())
    infoWrapper?.append(skills)
}

function createSkillsHeading(text: string): HTMLDivElement {
    const skillsHeading: HTMLDivElement = document.createElement('div')
    skillsHeading.classList.add('skills__heading')
    const skillsHeadingText: HTMLHeadingElement = document.createElement('h3')
    skillsHeadingText.textContent = text

    skillsHeading.append(skillsHeadingText)
    return skillsHeading
}

function createDubleLine(): HTMLDivElement {
    const dubleLine: HTMLDivElement = document.createElement('div')
    dubleLine.classList.add('duble-line')
    const line: HTMLSpanElement = document.createElement('span')
    line.classList.add('line')
    const subLine: HTMLSpanElement = document.createElement('span')
    subLine.classList.add('line', 'line_sub')

    dubleLine.append(line, subLine)
    return dubleLine
}

function createSkillsList(): HTMLUListElement {
    const list: HTMLUListElement = document.createElement('ul')
    list.classList.add('skills__list')
    createListElement(list)

    return list
}

function createListElement(list: HTMLUListElement) {
    const slillsList:HTMLUListElement = list

    LIST_ELEMENTS.forEach(option => {
        const listItem: HTMLLIElement = document.createElement('li')
        const listTitle: HTMLSpanElement = document.createElement('span')
        const progressBar: HTMLProgressElement = document.createElement('progress')

        option.title && option.title.length > 0 && (listTitle.textContent = option.title)
        // option.class && option.class.length > 0 && (progressBar.classList.add(option.class)) 
        if(option.class && Array.isArray(option.class)) {
            option.class.forEach(element => {
                progressBar.classList.add(element)
            })
        }
    
        if(option.attributes && Array.isArray(option.attributes)){
           option.attributes.forEach(attribute => {
            const [key, value] = Object.entries(attribute)[0]
            progressBar.setAttribute(key, value)
           })
        }
       
        listItem.append(listTitle, progressBar)
        slillsList.appendChild(listItem)
    })
}



function createDetailsWrapper(): HTMLDivElement {
    const details: HTMLDivElement = document.createElement('div')
    details.classList.add('skills__details')
    details.append(createSkillsHeading('Details'), createDubleLine())

    return details
}

function createDetailsItemsWrapper(): HTMLDivElement {
    const items: HTMLDivElement = document.createElement('div')
    items.classList.add('skills__details-items') 
    createDetailsItem(items)

    return items
}

function createDetailsItem(items: HTMLDivElement) {
    DETAILS_ELEMENTS_DATA.forEach(option => {
        const item: HTMLDivElement = document.createElement('div')
        item.classList.add('details-item')
        const itemTitle: HTMLDivElement = document.createElement('div')
        itemTitle.classList.add('details-item__title')
        const itemTitleText: HTMLHeadingElement = document.createElement('h4')
        const itemList: HTMLUListElement = document.createElement('ul')
        itemList.classList.add('details-item__text')
        
        option.title && (itemTitleText.textContent = option.title)

        if(option.text && Array.isArray(option.text)) {
            option.text.forEach(list => {
                const itemListText: HTMLLIElement = document.createElement('li')
                itemListText.textContent = list
                itemList.append(itemListText)
            })
        }

        itemTitle.appendChild(itemTitleText)
        item.append(itemTitle, itemList)
        items.append(item)
    })
}

