import { createDubleLine } from "./helpers/createDubleLine"
import { createHeading } from "./helpers/createHeaading"
import { PROJECT_TEXT } from "../consts/options"

const infoWrapper: HTMLElement | null = document.querySelector('.info__wrapper')

function createprojectWrapper(): HTMLElement {
    const project: HTMLDivElement = document.createElement('div')
    project.classList.add('project')

    return project
}

export function createWorkWrapper(): void {
    const project: HTMLElement | null = createprojectWrapper()

    PROJECT_TEXT.forEach(item => {
        const work: HTMLDivElement = document.createElement('div')
        work.classList.add(item.tag)
        work.append(createWorkDeskription(item.name, item.title, item.text), createProjectLinks(item.site, item.git))
        project.append(work)
    })

    infoWrapper?.append(project)
}

function createWorkDeskription(name: string, title: string, text: string[]): HTMLElement {
    const deskription: HTMLDivElement = document.createElement('div')
    deskription.classList.add('work__description')
    deskription.append(createHeading(name), createDubleLine(), createWorkInner(title, text))

    return deskription
}

function createWorkText(wrapper: HTMLElement, title: string, text: string[]): void {
    const workTitle: HTMLElement | null = createWorkTitle()
    const workList: HTMLElement | null = createWorkList()

    const workTitleText: HTMLHeadElement = document.createElement('h5')

    title && (workTitleText.textContent = title)

    if (text && Array.isArray(text)) {
        text.forEach(item => {
            const listItem: HTMLLIElement = document.createElement('li')
            listItem.textContent = item
            workList.append(listItem)
        })
    }

    workTitle.append(workTitleText)
    wrapper.append(workTitle, workList)
}

function createWorkInner(title: string, text: string[]): HTMLElement {
    const wrapper: HTMLDivElement = document.createElement('div')
    wrapper.classList.add('work__inner')
    createWorkText(wrapper, title, text)

    return wrapper
}

function createWorkTitle(): HTMLElement {
    const workTitle: HTMLDivElement = document.createElement('div')
    workTitle.classList.add('work__title')

    return workTitle
}

function createWorkList(): HTMLElement {
    const workList: HTMLUListElement = document.createElement('ul')
    workList.classList.add('work__list')

    return workList
}

function createProjectLinks(webSite: string, github: string): HTMLElement {
    const links: HTMLDivElement = document.createElement('div')
    links.classList.add('work__links')
    const webSiteLink = createLinkOnWebsite(webSite)
    const githubLink = reateLinkOnGithub(github)

    links.append(webSiteLink, githubLink)

    return links
}

function createLinkOnWebsite(webSite: string): HTMLElement {
    const webSiteLink: HTMLAnchorElement = document.createElement('a')
    webSiteLink.classList.add('btn', 'btn_rainbow')
    webSiteLink.href = webSite

    return webSiteLink
}

function reateLinkOnGithub(github: string): HTMLElement {
    const githubLink: HTMLAnchorElement = document.createElement('a')
    githubLink.classList.add('btn', 'btn_small')
    githubLink.href = github

    const githubImg: HTMLImageElement = document.createElement('img')
    githubImg.src = 'https://drive.google.com/uc?id=1uPrrn6LJcGnO7_KhDnucfHtMmQLB7FLt'
    githubImg.alt = 'github'
    const githubImgBlack: HTMLImageElement = document.createElement('img')
    githubImgBlack.src = 'https://drive.google.com/uc?id=1uqr-UJ88zvssVbmiLxmhxUKMyVUVns6f'
    githubImgBlack.alt = 'github'

    githubLink.append(githubImg, githubImgBlack)

    return githubLink
}