import { LIST_ELEMENTS, DETAILS_ELEMENTS_DATA } from "../consts/options"
import { createDubleLine } from "./helpers/createDubleLine"
import { createHeading } from "./helpers/createHeaading"

const infoWrapper: HTMLElement | null = document.querySelector('.info__wrapper')

export function createSkilsWrapper() {
    const skills: HTMLElement = document.createElement('div')
    skills.classList.add('skills')
    skills.append(createHeading('Skills'), createDubleLine(), createSkillsList(), createDetailsWrapper(), createDetailsItemsWrapper())
    infoWrapper?.append(skills)
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
    details.append(createHeading('Details'), createDubleLine())

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
            option.text.forEach(item => {
                const itemListText: HTMLLIElement = document.createElement('li')
                itemListText.textContent = item
                itemList.append(itemListText)
            })
        }

        itemTitle.appendChild(itemTitleText)
        item.append(itemTitle, itemList)
        items.append(item)
    })
}

