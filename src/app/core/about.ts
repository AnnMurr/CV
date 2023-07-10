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

    image.src = 'https://lh3.googleusercontent.com/pw/AIL4fc-pNOCpiypvfkByr6Rhv7KpPbfbzB9g5dg0eBOYqrwMOuJDZy9Wr7_dxCT5e3O3jZft02JQHT2BV62Cqo3HVuCrk53h34TxJDgIFd7evzQkWo_O9YME1ThAcJdO6hKlXnIa54dqak-RYtmRzHHqlmQ-nGWTtMDYeeLFrkyneJbmQTZ9hMhlKRyloxQG__t1tU7roTichLl2876B9_RpUhIQrJ-b_xyJSzJFZETeNa_DUM1LcNXiK4bVO0tML8HdMHIiI9o3euZEEgVe6HyBig08pKgBSKocoSgki93PNXIP7bor45lMX727xOs385HWpAfOExWMgs5Ia7oIs86KMSULpKjkWs2AgHzOTfLr7E0d0_bSivsBU01xAxmwraEeZvROKldijy-6YKdFAjlSGHVM6J63djtcvmemnLgj5XW-0F-_TBJFakqpezs8cZkRxGhzuGAILnj6ViWIcM0grJj4LQ7vm6iH1-qRVjM_TT5EJv7c-0dxA20kiR5wbtFAG4Kbo2YG7A8FlRPeDFH_ZlcWhJWtS5PkVmNqeRapwpp0hs8cI9puN-8d1xiJZGyHB5Rocigloyv7RZQp4tXyCXybmhANEQtJOh3wC15yr_6nXPamtqYKckBqfBqOy3sz5a7wZzxbePaGpXvCpIWKlpw1s5d1li9THWL5he33bQN1UhITtc3OXbWEyBhUwZCh_To994zfz5snK-ipUiMzcY6Q8fMdkbiw14vPAQ7tZ6zToFzCMuJOpK-ORtYH5UZk_AsFbAqYoQMU7wZ1Bh2xuVyo8CgsIVjLxvhrgxFcGjU7chpqT5ZU9oNY5WExbIgcZ2sC5aQpKzBZgg9mLDW5Lq5jPpQ9nFo4uZq6DdF0JlXGwDtFrc8GzIcvPjsPWKfPpyKDQ25ozR3Wz8Y7WpbZ=w540-h614-s-no?authuser=0'
    image.alt = 'My photo'
    image.loading = 'eager'
    imageWrapper.append(image)

    return imageWrapper
}