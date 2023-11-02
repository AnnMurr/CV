import { LIST_ELEMENTS, DETAILS_ELEMENTS_DATA, SERTIFICATIONS_DATA } from "../consts/options"
import { createDubleLine } from "./helpers/createDubleLine"
import { createHeading } from "./helpers/createHeaading"

const infoWrapper: HTMLElement | null = document.querySelector('.info__wrapper')

export function createSkilsWrapper(): void {
    const skills: HTMLElement = document.createElement('div')
    skills.classList.add('skills')
    skills.append(createHeading('Skills'), createDubleLine(), createSkillsList(), createDetailsWrapper(), createDetailsItemsWrapper(), createCertificationsWrapper())
    infoWrapper?.append(skills)
}

function createSkillsList(): HTMLUListElement {
    const list: HTMLUListElement = document.createElement('ul')
    list.classList.add('skills__list')
    createListElement(list)

    return list
}

function createListElement(list: HTMLUListElement): void {
    const slillsList: HTMLUListElement = list

    LIST_ELEMENTS.forEach(option => {
        const listItem: HTMLLIElement = document.createElement('li')
        const listTitle: HTMLSpanElement = document.createElement('span')
        const progressBar: HTMLProgressElement = document.createElement('progress')

        option.title && option.title.length > 0 && (listTitle.textContent = option.title)

        if (option.class && Array.isArray(option.class)) {
            option.class.forEach(element => {
                progressBar.classList.add(element)
            })
        }

        if (option.attributes && Array.isArray(option.attributes)) {
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

function createDetailsItem(items: HTMLDivElement): void {
    DETAILS_ELEMENTS_DATA.forEach(option => {
        const item: HTMLDivElement = document.createElement('div')
        item.classList.add('details-item')
        const itemTitle: HTMLDivElement = document.createElement('div')
        itemTitle.classList.add('details-item__title')
        const itemTitleText: HTMLHeadingElement = document.createElement('h4')
        const itemList: HTMLUListElement = document.createElement('ul')
        itemList.classList.add('details-item__text')

        option.title && (itemTitleText.textContent = option.title)

        if (option.text && Array.isArray(option.text)) {
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

function createCertificationsWrapper(): HTMLDivElement {
    const certifications: HTMLDivElement = document.createElement('div')
    certifications.classList.add('skills__certifications')
    certifications.append(createHeading('Licenses & Certifications'), createDubleLine(), createBloksWrap())

    return certifications
}

function createBloksWrap() : HTMLDivElement {
    const blocks: HTMLDivElement = document.createElement('div')
    blocks.classList.add('certifications__blocks')
    createBlockCertifications(blocks)

    return blocks
}

function createBlockCertifications(wrap): void {
    const wrapper: HTMLDivElement = wrap

    SERTIFICATIONS_DATA.forEach((item) => {
        const blockCertifications: HTMLDivElement = document.createElement('div')
        blockCertifications.classList.add('certifications-block')
        const list = createBlockListCertifications()

        list.append(createBlockTitle(item.title),
            createBlockSubitle(item.subTitle),
            createBlockLink(item.link, item.textLink))

        blockCertifications.append(createBlockIcon(item.icon), list)
        wrapper.append(blockCertifications)
    })
}

function createBlockListCertifications(): HTMLDivElement {
    const wrap: HTMLDivElement = document.createElement('div')
    wrap.classList.add('certifications-block-list')

    return wrap
}

function createBlockTitle(text): HTMLDivElement {
    const inner: HTMLDivElement = document.createElement('div')
    const title: HTMLHeadElement = document.createElement('h4')
    inner.classList.add('certifications-block__title')
    title.textContent = text
    inner.append(title)

    return inner
}

function createBlockSubitle(text): HTMLDivElement {
    const inner: HTMLDivElement = document.createElement('div')
    const subTitle: HTMLHeadElement = document.createElement('h5')
    inner.classList.add('certifications-block__subTitle')
    subTitle.textContent = text
    inner.append(subTitle)

    return inner
}

function createBlockLink(value, text): HTMLDivElement {
    const inner: HTMLDivElement = document.createElement('div')
    const link: HTMLAnchorElement = document.createElement('a')
    inner.classList.add('certifications-block__link')
    link.text = text
    link.href = value
    inner.append(link)

    return inner
}

function createBlockIcon(link): HTMLDivElement {
    const inner: HTMLDivElement = document.createElement('div')
    const image: HTMLImageElement = document.createElement('img')
    inner.classList.add('certifications-block__image')
    image.src = link
    inner.append(image)
    
    return inner
}