import { InformationBlockListData } from "../consts/options"
import { InformationBlockTextData } from "../consts/options"

const infoWrapper: HTMLElement | null = document.querySelector('.info__wrapper')

export function createAboutWrapper(): void {
    const aboutWrapper: HTMLDivElement = document.createElement('div')
    aboutWrapper.classList.add('about')
    aboutWrapper.append(createInformationBlock(), createImageBlock())
    infoWrapper?.append(aboutWrapper)
}

function createInformationBlock(): HTMLElement {
    const informationWrapper: HTMLDivElement = document.createElement('div')
    informationWrapper.classList.add('information')
    informationWrapper.append(createInformationList(), createArticle())

    return informationWrapper
}

function createInformationList(): HTMLElement {
    const list: HTMLUListElement = document.createElement('ul')
    list.classList.add('information__list')

    for (const elem in InformationBlockListData) {
        const item: HTMLLIElement = document.createElement('li')
        const key: HTMLSpanElement = document.createElement('span')
        key.textContent = elem
        const value: HTMLSpanElement = document.createElement('span')
        value.textContent = InformationBlockListData[elem]

        item.append(key, value)
        list.append(item)
    }

    return list
}

function createArticle(): HTMLElement {
    const article: HTMLDivElement = document.createElement('div')
    article.classList.add('information__article')
    const articleText: HTMLElement = document.createElement('p')
    articleText.textContent = InformationBlockTextData.text
    article.append(articleText)

    return article
}

function createImageBlock(): HTMLElement {
    const imageWrapper: HTMLDivElement = document.createElement('div')
    imageWrapper.classList.add('about__image')
    const image: HTMLImageElement = document.createElement('img')

    image.src = 'https://i.imgur.com/O1L4z83.png'
    image.alt = 'My photo'
    image.loading = 'eager'
    imageWrapper.append(image)

    return imageWrapper
}