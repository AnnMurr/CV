const pageWrapper = document.querySelector('.page-background__wrapper') as HTMLElement

window.addEventListener('scroll', () => {
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
  pageWrapper.style.transform = `scale(${1 + scrollProgress * 0.25}) translate(${-20 * scrollProgress}px, ${15 * scrollProgress}px)`
  pageWrapper.style.transformOrigin = 'left'
})