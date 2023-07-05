const wrapper: HTMLElement | null = document.querySelector('.info__wrapper')
console.log(wrapper)


const linksData = [
    {
        tag: 'instagram',
        href: 'https://www.instagram.com/anna__murina/',
        text: 'anna__murina',
        icon: 'https://drive.google.com/uc?export=download&id=1gAsCJlh70Kx8H3N4y997sn_4NNRiPbbY',
    },
    {
        tag: 'whatsApp',
        href: 'https://wa.me/+37069378619',
        text: '+37069378619',
        icon: 'https://drive.google.com/uc?export=download&id=1h6qTseIheHvhOGKjXw-fgNqrJVNe9KKY',
    },
    {
        tag: 'telegram',
        href: 'https://t.me/+37069378619',
        text: '+37069378619',
        icon: 'https://drive.google.com/uc?export=download&id=1d3XYKEdWQfe0zfSjz2aG-kfRX1BLmksX',
    },
    {
        tag: 'linkidin',
        href: "https://www.linkedin.com/in/anna-murina-02ab39248/",
        text: 'Anna Murina',
        icon: 'https://drive.google.com/uc?export=download&id=1yKPl6UGxTqTRncTVt5IDcqAgQU0FT4Id',
    }
]


function createContactsList() {
    const list = document.createElement('ul')
    list.classList.add('contacts__list')

    wrapper?.append(list)
}
createContactsList()

function createElements() {
    const list = document.querySelector('.contacts__list')
    linksData.forEach(item => {
        const element = document.createElement('li')
        const link = document.createElement('a')

        item.href && (link.href = item.href)

        const socIcon = document.createElement('img')
        item.icon && (socIcon.src = item.icon)
        item.tag && (socIcon.alt = item.tag)
        const linkText = document.createElement('span')
        item.text && (linkText.textContent = item.text)

        link.append(socIcon, linkText)
        element.append(link)

        list?.append(element)
    })
}
createElements()
