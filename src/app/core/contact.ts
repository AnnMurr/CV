// const wrapper: HTMLElement | null = document.querySelector('.info__wrapper')

// interface LinkData {
//     tag: string,
//     href: string,
//     text: string,
//     icon: string
// }

// const linksData: LinkData[] = [
//     {
//         tag: 'instagram',
//         href: 'https://www.instagram.com/anna__murina/',
//         text: 'anna__murina',
//         icon: 'https://drive.google.com/uc?export=download&id=1gAsCJlh70Kx8H3N4y997sn_4NNRiPbbY',
//     },
//     {
//         tag: 'whatsApp',
//         href: 'https://wa.me/+37069378619',
//         text: '+37069378619',
//         icon: 'https://drive.google.com/uc?export=download&id=1h6qTseIheHvhOGKjXw-fgNqrJVNe9KKY',
//     },
//     {
//         tag: 'telegram',
//         href: 'https://t.me/+37069378619',
//         text: '+37069378619',
//         icon: 'https://drive.google.com/uc?export=download&id=1d3XYKEdWQfe0zfSjz2aG-kfRX1BLmksX',
//     },
//     {
//         tag: 'linkidin',
//         href: "https://www.linkedin.com/in/anna-murina-02ab39248/",
//         text: 'Anna Murina',
//         icon: 'https://drive.google.com/uc?export=download&id=1yKPl6UGxTqTRncTVt5IDcqAgQU0FT4Id',
//     }
// ]

// function createContactsList() {
//     const list = document.createElement('ul')
//     list.classList.add('contacts__list')

//     wrapper?.append(list)
// }

// function createElements() {
//     createContactsList()
//     const list: HTMLElement | null = document.querySelector('.contacts__list')

//     if(list) {
//         linksData.forEach(item => {
//             const element: HTMLElement = document.createElement('li')
//             const link: HTMLAnchorElement = document.createElement('a')
//             const socIcon: HTMLImageElement = document.createElement('img')
//             const linkText: HTMLElement = document.createElement('span')
            
//             if (item.href) {
//                 link.href = item.href;
//             }
    
//             item.icon && (socIcon.src = item.icon)
//             item.tag && (socIcon.alt = item.tag)
//             item.text && (linkText.textContent = item.text)
    
//             link.append(socIcon, linkText)
//             element.append(link)   
//             list?.append(element)
//         })
//     } 
// }
// createElements()