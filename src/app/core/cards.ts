const btn: NodeListOf<Element> | null = document.querySelectorAll('.card');

btn.forEach(element => {
    element.addEventListener('click', () => {
        console.log('haha');
    })
})