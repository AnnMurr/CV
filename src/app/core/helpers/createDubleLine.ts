export function createDubleLine(): HTMLDivElement {
    const dubleLine: HTMLDivElement = document.createElement('div')
    dubleLine.classList.add('duble-line')
    const line: HTMLSpanElement = document.createElement('span')
    line.classList.add('line')
    const subLine: HTMLSpanElement = document.createElement('span')
    subLine.classList.add('line', 'line_sub')

    dubleLine.append(line, subLine)
    return dubleLine
}